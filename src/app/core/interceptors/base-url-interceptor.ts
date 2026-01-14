import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { HttpService } from '../services/http.service';
import { environment } from '../../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes('i18n')){
    return next(req);
  }
  const languageService = inject(LanguageService);

  const currentLang = languageService.getCurrentLang();

  const translateRequired = req.headers.get(HttpService.TRANSLATE_REQUIRE_HEADER) === 'true';

  const modifiedUrl = translateRequired 
  ? `assets/data/${currentLang()}${req.url}`
  : `${environment.apiUrl}${req.url}`;

  const modifiedReq = req.clone({
    url: modifiedUrl,
  });

  return next(modifiedReq);
};

