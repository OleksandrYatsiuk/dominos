import { ChangeDetectionStrategy, Component, computed, input, signal, TemplateRef } from '@angular/core';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-slider',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent<T> {
  slides = input<T[]>();

  slideTemplate = input<TemplateRef<any>>();

  activeIndex = signal(0);

  items = computed(() => this.slides()?.map((_, index) => index));
}
