import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../services/profile.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = {
    login: '',
    avatar_url: '',
    id: '',
  };
  username: string;
  repos: any[];
  @Output() onUserSelect = new EventEmitter<any>();
  constructor(private service: ProfileService) {
    this.service.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  findProfile() {
    this.service.updateProfile(this.username);
    this.service.getProfileInfo().subscribe((users) => {
      this.users = users;
    });
    this.service.getProfileRepos().subscribe((repos) => {
      this.repos = repos;
    });
  }

  ngOnInit() {}
  emitUserSelection(user) {
    this.onUserSelect.emit(user);
  }
}
