# =========================================
# Stage 1: Build the Angular Application
# =========================================
ARG NODE_VERSION=25-alpine


# Use a lightweight Node.js image for building (customizable via ARG)
FROM node:${NODE_VERSION} AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package-related files first to leverage Docker's caching mechanism
COPY package.json package-lock.json ./

# Install project dependencies using npm ci (ensures a clean, reproducible install)
RUN --mount=type=cache,target=/root/.npm npm ci


# Copy the rest of the application source code into the container
COPY . .

# Build the Angular application
RUN npm run build


# =========================================
# Stage 2: Prepare Node to Serve The app
# =========================================
FROM node:${NODE_VERSION}

# Use a non-root user for security best practices
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Set the working directory inside the container
WORKDIR /usr/app

# Copy the builder output from the build stage to serving directory
COPY --from=builder /app/dist/app-fa002 /usr/app/dist/app-fa002

# In server.ts file, default port is 4000
EXPOSE 4000

# Set health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:4000/ || exit 1

# Start node_server
CMD ["node", "dist/app-fa002/server/server.mjs"]

