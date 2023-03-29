import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {ContactRoutingModule} from "./contact-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ContactComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
