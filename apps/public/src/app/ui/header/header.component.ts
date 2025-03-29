import { ChangeDetectionStrategy, Component, inject, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  constructor(readonly injector: Injector) { }

  translateService = inject(TranslateService);

  onChangeLanguage(code: string) {
    this.translateService.use(code);
  }
}
