import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-basket-button',
  imports: [TranslateModule],
  templateUrl: './basket-button.component.html',
  styleUrl: './basket-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketButtonComponent {
  count = signal(0);
}
