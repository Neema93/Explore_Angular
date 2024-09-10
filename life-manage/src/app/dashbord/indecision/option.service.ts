import { Injectable } from "@angular/core";
import { NewOptionData } from "./option/option.model";


@Injectable({providedIn: 'root'})
export class OptionsService {
    options= [{
        id:'o1',
        option:'work for job'
    },
    {
        id:'o2',
        option:'cooking'
    }
];
    constructor(){
        const tasks = localStorage.getItem('options');
        if(tasks){
            this.options= JSON.parse(tasks);
        }
    }
  

    addTask(optionData:NewOptionData ) {
        this.options.unshift({
            id: new Date().getTime().toString(),
            option:optionData.option
          }) 
          this.saveTasks();
    }
    removeTask(id: string) {
        this.options = this.options.filter((option)=> option.id !== id);
        this.saveTasks();
    }
    private saveTasks() {
        localStorage.setItem('options',JSON.stringify(this.options));
    }
}