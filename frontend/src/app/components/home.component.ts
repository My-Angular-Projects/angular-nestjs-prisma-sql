import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IUser } from '@fullstack-example/shared-lib';
import { AppService } from '../services/app.service';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatList, MatListItem],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly users: Observable<IUser[]> = inject(AppService).getUsers();
}
