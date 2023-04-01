import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactAddComponent} from "./contact-add.component";
import {ContactAddRoutingModule} from "./contact-add-routing.module";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NzButtonModule} from "ng-zorro-antd/button";
import {RequiredFieldDirective} from "../shared/custom-directives/required-field.directive";

@NgModule({
  declarations: [ContactAddComponent],
    imports: [
        CommonModule,
        ContactAddRoutingModule,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        NgxsFormPluginModule,
        NzButtonModule,
        RequiredFieldDirective,
    ]
})
export class ContactAddModule { }
