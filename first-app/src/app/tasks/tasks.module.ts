import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { AddtaskComponent } from "./addtask/addtask.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent,TaskComponent,AddtaskComponent],
    exports:[TasksComponent],
    imports:[BrowserModule,FormsModule]
    

})
export class TasksModule{}