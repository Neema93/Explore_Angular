import { Component, Input } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import {DUMMY_TASKS} from './dammy-task';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddtaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
 
}
