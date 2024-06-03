import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from './services/app.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { IUser } from '@fullstack-example/shared-lib';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly users: Observable<IUser[]> = inject(AppService).getUsers();
}
