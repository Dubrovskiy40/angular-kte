import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactAddComponent} from "./contact-add.component";
import {ContactAddRoutingModule} from "./contact-add-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [ContactAddComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactAddRoutingModule,
  ]
})
export class ContactAddModule { }
