import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  BASE_URL = "http://api.github.com/users";

  async search(username: string) {
    const response = await fetch(`${this.BASE_URL}/${username}`);
    return response;
  }
}
