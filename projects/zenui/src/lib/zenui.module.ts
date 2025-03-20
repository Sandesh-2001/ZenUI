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
  CardSubTitleComponent
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
