import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidebarComponent } from './sidenav/components/sidebar/sidebar.component';
import { ContentComponent } from './sidenav/components/content/content.component';
import {ContactModule} from "../contact/contact.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NotFoundComponent} from "./components/not-found/not-found.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    SidebarComponent,
    ContentComponent,
    NotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    SidebarComponent,
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
