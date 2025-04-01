import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { Store } from '@ngxs/store';
import { ProfileState } from '../../core/states/profile/profile.state';
import { MenuItem } from 'primeng/api';
import { Logout } from '../../core/states/profile/profile.actions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenuModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private store = inject(Store);

  profile = this.store.selectSignal(ProfileState.profile);

  abbreviate = computed(() => `${this.profile()?.firstName.charAt(0)}${this.profile()?.lastName.charAt(0)}`);

  profileActions = signal<MenuItem[]>([
    {
      icon: 'pi pi-cog',
      label: 'Profile Settings',
      routerLink: '/profile',
    },
    {
      icon: 'pi pi-key',
      label: 'Password',
      routerLink: '/profile/password'
    },
    {
      icon: 'pi pi-sign-out',
      label: 'Logout',
      command: () => {
        this.store.dispatch(new Logout());
      }
    }
  ]);
}
