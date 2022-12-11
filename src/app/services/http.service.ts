import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public async readUsers(page: Number): Promise<object> {
    return await firstValueFrom(
      this.httpClient.get(
        `https://gorest.co.in/public/v2/users?page=${page}&per_page=5`
      )
    );
  }

  public async readUser(id: Number): Promise<object> {
    return await firstValueFrom(
      this.httpClient.get(`https://gorest.co.in/public/v2/users/${id}`)
    );
  }
}
