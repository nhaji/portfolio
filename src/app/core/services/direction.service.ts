import { Directionality } from '@angular/cdk/bidi';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {

  isRtl = signal<boolean>(false);
  private dir = inject(Directionality);

  constructor(){
    this.isRtl.set(this.dir.value === 'rtl')
  }
  
}
