import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {ContactRoutingModule} from "./contact-routing.module";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [ContactComponent],
  exports: [
    ContactComponent,
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        NzModalModule,
        NzIconModule,
    ]
})
export class ContactModule { }
