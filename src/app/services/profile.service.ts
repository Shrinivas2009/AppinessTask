import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  private username: string;
  private clientid = '203dd913322b3db7d987';
  private clientsecret = '020c0b3665296b33d758edeeced30473ef44f7da';

  constructor(private http: Http) {}

  getUsers() {
    return this.http
      .get('https://api.github.com/users')
      .pipe(map((res) => res.json()));
  }

  getProfileInfo(username?) {
    interface ApiResponse {
      login: string;
    }
    return this.http
      .get(
        'https://api.github.com/users/' +
          (username || this.username) +
          '?client_id=' +
          this.clientid +
          '&client_secret=' +
          this.clientsecret
      )
      .pipe(map((res) => res.json()));
  }

  getProfileRepos(username?) {
    return this.http
      .get(
        'https://api.github.com/users/' +
          (username || this.username) +
          '/repos?client_id=' +
          this.clientid +
          '&client_secret=' +
          this.clientsecret
      )
      .pipe(map((res) => res.json()));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
