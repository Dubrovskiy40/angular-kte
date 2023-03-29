import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsListComponent} from "./contacts-list.component";
import {ContactsListRoutingModule} from "./contacts-list-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ContactsListRoutingModule,
    RouterModule,
  ]
})
export class ContactsListModule { }
