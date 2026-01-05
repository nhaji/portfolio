import { ContactType } from "./contact-type.enum";

export interface ContactModel {
  type: ContactType;
  value: string;
  label: string;
  link?: string;
}
