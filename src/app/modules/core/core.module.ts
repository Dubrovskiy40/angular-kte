import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterLink} from "@angular/router";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";



@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
  ]
})
export class CoreModule { }
