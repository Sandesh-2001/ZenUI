import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { FileComponent } from './components/file/file.component';
import { CardComponent } from './components/card/card/card.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardTitleComponent } from './components/card/card-title/card-title.component';
import { CardSubTitleComponent } from './components/card/card-sub-title/card-sub-title.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { DialogBodyComponent } from './components/dialog/dialog-body/dialog-body.component';
import { DialogHeaderComponent } from './components/dialog/dialog-header/dialog-header.component';
import { DialogFooterComponent } from './components/dialog/dialog-footer/dialog-footer.component';

const components = [
  ButtonComponent,
  SelectComponent,
  FileComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  CardFooterComponent,
  CardContentComponent,
  CardTitleComponent,
  CardSubTitleComponent,
  ChipsComponent
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
