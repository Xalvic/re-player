import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
    MatIconModule,
    MatToolbarModule
];

@NgModule({
    imports: [MaterialComponents],
    exports: [MaterialComponents],
  })
  export class MaterialModule {}