import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket-button',
  imports: [CommonModule],
  templateUrl: './basket-button.component.html',
  styleUrl: './basket-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketButtonComponent {


  count = signal(0);
}
