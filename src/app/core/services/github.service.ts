import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);
  private api = 'https://api.github.com/users';

  getUser(username: string){
    return this.http.get(`${this.api}/${username}`);
  }

  getRepos(username: string){
    return this.http.get(`${this.api}/${username}/repos`)
  }
}
