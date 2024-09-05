import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css'
})
export class AddtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  onCancle(){
    this.cancel.emit();
  }
}
