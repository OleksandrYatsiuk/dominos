import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { UsersService, UserView } from '@dominos/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { tableGlobalFilter } from '../../core/utils/table.utils';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

interface UsersTableRecord {
  original: UserView;
  username: string;
  email: string;
}

@Component({
  selector: 'app-users',
  imports: [TableModule, InputTextModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  private usersService = inject(UsersService);

  pizzas = rxResource({
    loader: () => this.usersService.fetchUsers().pipe(map((response) => response.result.map((item) => this.transformRecord(item)))),
  });

  globalFilter = tableGlobalFilter;

  cols = signal([
    { field: 'username', header: 'Назва', sortable: true },
    { field: 'email', header: 'Електронна пошта', sortable: true },
    { field: 'options', header: '', width: '100px' }
  ]);

  private transformRecord(user: UserView): UsersTableRecord {
    return {
      original: user,
      username: user.username,
      email: user.email,
    }
  }
}
