import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsListComponent} from './contacts-list.component';
import {ContactsListRoutingModule} from './contacts-list-routing.module';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    ContactsListRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
  ]
})
export class ContactsListModule { }
