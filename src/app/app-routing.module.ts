import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ShowtaskComponent } from './showtask/showtask.component';

const routes: Routes = [
  {path:"addtask",component:AddtaskComponent},
  {path:"showtask",component:ShowtaskComponent},
  {path:"editTask",component:EdittaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
