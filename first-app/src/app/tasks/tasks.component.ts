import { Component, Input } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import {DUMMY_TASKS} from './dammy-task';
import { TaskComponent } from './task/task.component';
import {type NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';
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
  isAddingTask = false;

 constructor(private taskService: TaskService){}
  get setlectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
   this.taskService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask =true;
  }
  onCloseAddTask(){
    this.isAddingTask = false
  }

}