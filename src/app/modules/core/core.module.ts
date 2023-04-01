import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import { ContentComponent } from './content/content.component';
import {ContactModule} from "../contact/contact.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NotFoundComponent} from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    NotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    ContactModule,
    NzIconModule,
    RouterLinkActive,
  ]
})
export class CoreModule { }
