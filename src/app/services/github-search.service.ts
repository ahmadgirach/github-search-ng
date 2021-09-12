import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {
  async search(username: string) {
    const response = await fetch(`${environment.githubBaseUrl}/${username}`);
    return response;
  }
}
