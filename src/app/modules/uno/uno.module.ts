import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './components/uno/uno.component';
import { UnoRoutingModule } from './uno-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    UnoComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    UnoRoutingModule
  ],
  exports: [
    
  ]
})
export class UnoModule { }
