import { Component, HostListener } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { GithubSearchService } from './services/github-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: FormControl = new FormControl("", Validators.compose([Validators.required]));

  profile: any;
  hasError: boolean = false;

  errors: any = {
    api: ""
  };

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

  async submitForm() {
    this.hasError = false;
    const username = this.username.value;
    const response = await this.githubService.search(username);
    if (response.ok) {
      this.profile = await response.json();
    } else {
      this.hasError = true;
      this.errors.api = this.getErrorMessage(username);
    }
  }
}
