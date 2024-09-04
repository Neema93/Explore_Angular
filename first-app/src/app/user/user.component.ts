import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
// selecteduser = DUMMY_USERS[randomIndex];

get imagePath() {
  return '/asserts/users/' + this.user.avatar;
}

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
