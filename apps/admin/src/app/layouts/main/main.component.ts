import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Store } from '@ngxs/store';
import { FetchProfile } from '../../core/states/profile/profile.actions';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  private store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(new FetchProfile());
  }
}
