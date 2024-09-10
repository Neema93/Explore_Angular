import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-option',
  standalone: true,
  imports: [ButtonComponent,FormsModule],
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css'
})
export class AddOptionComponent {
  @Output() add = new EventEmitter<{option:string}>();
  enteredOption ?= '';
  onSubmit(){

  }
}
