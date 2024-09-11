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
        const options = localStorage.getItem('options');
        if(options){
            this.options= JSON.parse(options);
        }
    }
    getOptions() {
        return this.options
    }
    addOption(optionData:NewOptionData ) {
        this.options.unshift({
            id: new Date().getTime().toString(),
            option:optionData.option
          }) 
          this.saveOption();
    }
    removeOption(id: string) {
        this.options = this.options.filter((option)=> option.id !== id);
        this.saveOption();
    }
    getRandomOption(options: string[]): string {
        const randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
      }
    private saveOption() {
        localStorage.setItem('options',JSON.stringify(this.options));
    }
}