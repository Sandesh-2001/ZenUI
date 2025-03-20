import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { FileComponent } from './components/file/file.component';

const components = [
  ButtonComponent,
  SelectComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FileComponent,
    ...components
  ],
  exports: [
    FileComponent,
    ...components
  ]
})
export class ZenUiModule { }
