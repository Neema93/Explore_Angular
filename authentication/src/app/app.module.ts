import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AuthComponent } from "./auth/auth.component";

@NgModule({
    declarations: [AppComponent,
               AuthComponent
               ],
    bootstrap:[AppComponent],
    imports:[BrowserModule]

})
export class AppModule{

}