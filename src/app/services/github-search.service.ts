import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  BASE_URL = "http://api.github.com/users";

  constructor(
    private http: HttpClient
  ) { }

  search(username: string) {
    return this.http.get(`${this.BASE_URL}/${username}`);
  }
}
