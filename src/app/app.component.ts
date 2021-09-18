import { Component, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GithubSearchService } from './services/github-search.service';
import { environment } from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: FormControl = new FormControl("", Validators.compose([Validators.required]));

  profile: any;
  githubStats: string = "";
  githubanguageStats: string = "";
  followers: any[] = [];

  baseStatsEndPoint: string = environment.githubStatsBaseUrl;

  hasError: boolean = false;
  showLoader: boolean = false;

  errors: any = {
    api: ""
  };

  TIMEOUT_IN_MILLISECONDS: number = 500;

  constructor(
    private githubService: GithubSearchService
  ) { }

  @HostListener("window:keydown", ["$event"])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === "/") {
      const username = document.getElementById("username");
      if (username) {
        // To prevent `/` be typed in text box.
        event.preventDefault();
        username.focus();
      }
    }
  }

  get isFormValid(): boolean {
    return this.username.valid;
  }

  getErrorMessage(username: string): string {
    return `Username '${username}' was not found!`;
  }

  submitForm() {
    this.hasError = false;
    this.showLoader = true;
    this.followers = [];

    const username = this.username.value;

    setTimeout(async () => {
      const response = await this.githubService.search(username);
      if (response.ok) {
        this.profile = await response.json();
        this.githubStats = `${this.baseStatsEndPoint}/?username=${username}&show_icons=true`;
        this.githubanguageStats = `${this.baseStatsEndPoint}/top-langs/?username=${username}&layout=compact`;
      } else {
        this.hasError = true;
        this.errors.api = this.getErrorMessage(username);
      }
      this.showLoader = false;
    }, this.TIMEOUT_IN_MILLISECONDS);
  }

  setFollowers(followers: any[]) {
    this.followers = followers;
  }

}
