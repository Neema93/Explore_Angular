import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndecisionComponent } from './dashbord/indecision/indecision.component';
import { CookingDecisionComponent } from './dashbord/cooking-decision/cooking-decision.component';
import { NewIdeasComponent } from './dashbord/new-ideas/new-ideas.component';


const routes: Routes = [
  { path: 'indecision', component:  IndecisionComponent},
  { path: 'cooking-decision', component: CookingDecisionComponent  },
  { path: 'new-ideas', component: NewIdeasComponent },
  { path: '', redirectTo: '/indecision', pathMatch: 'full' }, // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}