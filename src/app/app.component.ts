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
    return `Something went wrong while fetching user '${username}'`;
  }

  submitForm() {
    const username = this.username.value;
    try {
      this.githubService.search(username).subscribe((response: any) => {
        if (response) {
          this.profile = response;
        } else {
          this.errors.api = this.getErrorMessage(username);
        }
      });
    } catch (error) {
      this.errors.api = this.getErrorMessage(username);
    }
  }
}
