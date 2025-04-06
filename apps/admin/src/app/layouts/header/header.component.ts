import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { Store } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ProfileState } from '../../core/states/profile/profile.state';
import { Logout } from '../../core/states/profile/profile.actions';

@Component({
  selector: 'app-header',
  imports: [MenuModule, RouterModule, MenubarModule],
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

  menuItems = signal<MenuItem[]>([
    {
      icon: 'pi pi-volume-down',
      label: 'Контент',
      items: [
        {
          label: 'Акції',
          routerLink: '/promotions'
        },
        {
          label: 'Новини',
          routerLink: '/news'
        },
      ],
    },
    {
      icon: 'pi pi-shop',
      label: 'Товари',
      items: [
        {
          label: 'Піци',
          routerLink: '/pizzas'
        },
        {
          label: 'Напої',
          routerLink: '/drinks',
        },
        {
          label: 'Інгредієнти',
          routerLink: '/ingredients',
        },
      ],
    },
    {
      label: 'Замовлення',
      icon: 'pi pi-shopping-cart',
    },
    {
      label: 'Користувачі',
      icon: 'pi pi-users',
      routerLink: '/users'
    }
  ]);
}
