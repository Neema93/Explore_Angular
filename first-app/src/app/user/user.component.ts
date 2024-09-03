import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dammy-user';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
selecteduser = DUMMY_USERS[randomIndex];

get imagePath() {
  return '/asserts/users/' + this.selecteduser.avatar;
}
}
