import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes('i18n')){
    return next(req);
  }
  const languageService = inject(LanguageService);

  const currentLang = languageService.getCurrentLang();

  const modifiedUrl = `assets/data/${currentLang()}${req.url}`;

  const modifiedReq = req.clone({
    url: modifiedUrl,
  });

  return next(modifiedReq);
};

