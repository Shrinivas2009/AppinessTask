import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  OnChanges,
} from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile = {
    login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: '',
  };
  repos: any[];
  username: string;
  @Input() userInformation;
  @Output() clearSelection = new EventEmitter<any>();

  constructor(private service: ProfileService) {}

  findProfile() {
    this.service.updateProfile(this.username);
    this.service.getProfileInfo().subscribe((profile) => {
      this.profile = profile;
    });
    this.service.getProfileRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.userInformation) {
      this.service
        .getProfileInfo(this.userInformation.login)
        .subscribe((profile) => {
          this.profile = profile;
        });
      this.service
        .getProfileRepos(this.userInformation.login)
        .subscribe((repos) => {
          this.repos = repos;
        });
    }
  }

  clearUserSelection() {
    console.log('in clear User Selection method of profile component');
    this.clearSelection.emit(null);
  }
}
