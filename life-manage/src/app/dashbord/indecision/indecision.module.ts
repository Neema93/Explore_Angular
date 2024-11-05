import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IndecisionComponent } from "./indecision.component";

import { AddOptionComponent } from "./add-option/add-option.component";
import { OptionsComponent } from "./options/options.component";
import { CommonModule } from "@angular/common";
import { OptionComponent } from "./option/option.component";

@NgModule({
    declarations:[
        AddOptionComponent,
        OptionsComponent,
    OptionComponent,
    IndecisionComponent],
    exports:[IndecisionComponent],
    imports:[BrowserModule,FormsModule,
        CommonModule]
    

})
export class IndecisionModule{}