import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { FileComponent } from './components/file/file.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { DialogBodyComponent } from './components/dialog/dialog-body/dialog-body.component';
import { DialogHeaderComponent } from './components/dialog/dialog-header/dialog-header.component';
import { DialogFooterComponent } from './components/dialog/dialog-footer/dialog-footer.component';

const components = [
  ButtonComponent,
  SelectComponent,
  DialogComponent,
  FileComponent,
  DialogBodyComponent,
  DialogHeaderComponent,
  DialogFooterComponent
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...components
  ],
  exports: [
    FileComponent,
    ...components
  ]
})
export class ZenUiModule { }
