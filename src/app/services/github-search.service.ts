import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  baseUrl: string = environment.githubBaseUrl;

  async search(username: string) {
    const response = await fetch(`${this.baseUrl}/${username}`);
    return response;
  }

  async getFollowers(url: string) {
    const response = await fetch(url);
    return response;
  }

}
