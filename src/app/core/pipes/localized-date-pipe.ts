import { inject, Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'date',
})
export class LocalizedDatePipe implements PipeTransform {

  private languageService = inject(LanguageService);

  public transform(value: any, pattern: string = 'fullDate'): any {
    const datePipe = new DatePipe(this.languageService.getCurrentLang()());
    return datePipe.transform(value, pattern);
  }

}
