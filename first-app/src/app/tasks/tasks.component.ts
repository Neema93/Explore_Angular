import { Component, Input } from '@angular/core';
import { AddtaskComponent } from './addtask/addtask.component';
import {DUMMY_TASKS} from './dammy-task';
import { TaskComponent } from './task/task.component';
import {type NewTaskData } from './task/task.model';

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
  tasks= DUMMY_TASKS;
  get setlectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=> task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask =true;
  }
  onCancelAddTask(){
    this.isAddingTask = false
  }
  onAddTask(taskData: NewTaskData  ){
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId:this.userId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date
    })
    this.isAddingTask =false;
  }
}
