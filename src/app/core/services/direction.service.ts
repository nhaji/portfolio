import { Directionality } from '@angular/cdk/bidi';
import { computed, inject, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DirectionService {
  private dir = inject(Directionality);
  isRtl: Signal<boolean> = computed(() => this.dir.valueSignal() === 'rtl');

}
