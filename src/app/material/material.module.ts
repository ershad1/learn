import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
  ],
  declarations: []
})
export class MaterialModule {
}
