import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';
import { OptionsService } from '../option.service';
import { NewOptionData } from '../option/option.model';

@Component({
  selector: 'app-add-option',
  standalone: true,
  imports: [ButtonComponent,FormsModule],
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css'
})
export class AddOptionComponent {
  // @Output() add = new EventEmitter<NewOptionData>();
  enteredOption = '';
  private optionService = inject(OptionsService)
  onSubmit(){
    this.optionService.addOption({
      option:this.enteredOption
     });
  
  }
}
