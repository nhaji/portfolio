import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, map, Observable, of, throwError, timeout } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

interface HttpError {
  messageKey: string;
  originalError: any;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  private translate = inject(TranslateService);
  //TODO : remove plateform management when fixing hydratation strategy
  private platformId = inject(PLATFORM_ID);
  static readonly TRANSLATE_REQUIRE_HEADER = 'X-Translate-Required';

  protected get<T>(url: string, withTranslate: boolean = false): Observable<T> {
    if (!isPlatformBrowser(this.platformId)) {
      return of({} as T);
    }
    const headers = new HttpHeaders({
      [HttpService.TRANSLATE_REQUIRE_HEADER]: withTranslate.toString(),
    });
    return this.http
      .get<T>(url, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleError<T>(error)));
  }

  protected post<T>(url: string, data: any, withTranslate: boolean = false, timeout?: number): Observable<T> {
    if (!isPlatformBrowser(this.platformId)) {
      return of({} as T);
    }

    const headers = new HttpHeaders({
      [HttpService.TRANSLATE_REQUIRE_HEADER]: withTranslate.toString(),
    });
    const config: any = {
      headers: headers
    };
    if (timeout) {
      config.timeout = timeout;
    }

    return this.http
      .post<T>(url, data, config)
      .pipe(
        map((response: any) => response.data),
        catchError((error: HttpErrorResponse) => this.handleError<T>(error)));
  }

  private handleError<T>(error: HttpErrorResponse) {
    let messageKey = 'ERROR.FETCH_FAILED';

    if (error.status === 404) messageKey = 'ERROR.NOT_FOUND';
    if (error.status >= 500) messageKey = 'ERROR.SERVER_ERROR';

    this.translate.get(messageKey).subscribe((translatedMessage: string) => {
      this.snackBar.open(translatedMessage, this.translate.instant('COMMON.CLOSE'), {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });
    });

    return throwError(() => ({
      messageKey :messageKey,
      originalError: error,
    } as HttpError));
  }
}
