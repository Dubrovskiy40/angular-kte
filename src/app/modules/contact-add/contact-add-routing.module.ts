import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactAddComponent} from "./contact-add.component";

const routes: Routes = [
  {
    path: '',
    component: ContactAddComponent,
    data: {
      title: 'Добавить новый контакт',
    },
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ContactAddRoutingModule { }
