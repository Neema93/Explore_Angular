import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { IndecisionComponent } from "./dashbord/indecision/indecision.component";
import { CookingDecisionComponent } from "./dashbord/cooking-decision/cooking-decision.component";
import { NewIdeasComponent } from "./dashbord/new-ideas/new-ideas.component";
import { DashbordItemComponent } from "./dashbord/dashbord-item/dashbord-item.component";
import { ButtonComponent } from "./shared/button/button.component";
import { IndecisionModule } from "./dashbord/indecision/indecision.module";

@NgModule({
    declarations: [AppComponent,
                HeaderComponent,
     
                HeaderComponent, 
               
                CookingDecisionComponent, 
                NewIdeasComponent,
                 DashbordItemComponent,
  ButtonComponent

               ],
    bootstrap:[AppComponent],
    imports:[BrowserModule,FormsModule, RouterOutlet,IndecisionModule]

})
export class AppModule{

}