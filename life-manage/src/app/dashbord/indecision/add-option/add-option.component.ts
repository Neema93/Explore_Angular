import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';
import { OptionsService } from '../option.service';
import { NewOptionData } from '../option/option.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-option',
  standalone: true,
  imports: [ButtonComponent,FormsModule,CommonModule,],
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css'
})
export class AddOptionComponent {
  @Output() add = new EventEmitter<NewOptionData>();

  enteredOption = '';
  errorMessage: string = '';
  private optionService = inject(OptionsService)
  onSubmit(){
    if (!this.enteredOption) {
      this.errorMessage = 'Please enter an option.';
    } else {
      this.errorMessage = '';
      this.optionService.addOption({
        option:this.enteredOption
       });
      console.log('Submitted:', this.enteredOption);
      this.enteredOption = '';
    }
   
     this.enteredOption = '';
  }
}
