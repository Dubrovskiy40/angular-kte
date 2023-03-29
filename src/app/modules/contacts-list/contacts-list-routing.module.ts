import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ContactsListComponent} from "./contacts-list.component";

const routes: Routes = [
  {
    path: '',
    component: ContactsListComponent,
    data: {
      title: 'Список контактов',
    },
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class ContactsListRoutingModule { }
