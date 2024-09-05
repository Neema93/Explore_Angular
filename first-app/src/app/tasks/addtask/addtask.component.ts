import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancle(){
    this.cancel.emit();
  }
  onSubmit() {
   this.add.emit({
    title: this.enteredTitle,
    summary:this.enteredSummary,
    date:this.enteredDate
   }) 
   
}
}
