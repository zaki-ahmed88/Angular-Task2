import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnInitComponent } from './on-init/on-init.component';
import { OnInitDemoComponent } from './on-init-demo/on-init-demo.component';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnChangesDemoComponent } from './on-changes-demo/on-changes-demo.component';
import { TemplateFormComponent } from './template-form/template-form.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    OnInitComponent,
    OnInitDemoComponent,
    OnChangesComponent,
    OnChangesDemoComponent,
    TemplateFormComponent,
    ReactiveFormsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
