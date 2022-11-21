import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
