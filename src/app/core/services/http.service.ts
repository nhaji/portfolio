import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);
  private translate = inject(TranslateService);
  static readonly TRANSLATE_REQUIRE_HEADER = 'X-Translate-Required';

  protected get<T>(url: string, withTranslate: boolean = false): Observable<T> {
    const headers = new HttpHeaders({
      [HttpService.TRANSLATE_REQUIRE_HEADER]: withTranslate.toString(),
    });
    return this.http
      .get<T>(url, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => this.handleError<T>(error)));
  }

  protected post<T>(url: string, data: any, withTranslate: boolean = false): Observable<T> {
    const headers = new HttpHeaders({
      [HttpService.TRANSLATE_REQUIRE_HEADER]: withTranslate.toString(),
    });
    return this.http
      .post<T>(url, data, { headers })
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

    console.error('HTTP Error:', error);

    // Return empty observable of the expected type
    // Use appropriate fallback based on expected type
    return of(null as T);
  }
}
