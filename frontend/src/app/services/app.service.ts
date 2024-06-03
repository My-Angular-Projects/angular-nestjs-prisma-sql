import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '@fullstack-example/shared-lib';

const apiUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly http = inject(HttpClient);

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${apiUrl}users`);
  }
}
