import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule,  } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

const materialModules = [
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule
];
@NgModule({
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
})
export class AngularMaterialModule { }