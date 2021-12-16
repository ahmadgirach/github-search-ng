import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GithubSearchService } from 'src/app/services/github-search.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() profile: any = {};
  @Output() receiveFollowers = new EventEmitter();

  constructor(
    private githubService: GithubSearchService
  ) { }

  ngOnInit(): void {
  }

  async getFollowers() {
    const response = await this.githubService.getFollowers(this.profile?.followers_url);
    if (response.ok) {
      const followers = await response.json();
      this.receiveFollowers.emit(followers);
    }
  }

}
