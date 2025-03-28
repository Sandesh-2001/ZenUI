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
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { RadioComponent } from './components/radio/radio.component';
import { PasswordComponent } from './components/password/password.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BadgeComponent } from './components/badge/badge.component';
import { MenubarContentComponent } from './components/menubar/menubar-content/menubar-content.component';
import { MenubarItemComponent } from './components/menubar/menubar-item/menubar-item.component';
import { MenubarMenuComponent } from './components/menubar/menubar-menu/menubar-menu.component';
import { MenubarSeperatorComponent } from './components/menubar/menubar-seperator/menubar-seperator.component';
import { MenubarShortcutComponent } from './components/menubar/menubar-shortcut/menubar-shortcut.component';
import { MenubarSubComponent } from './components/menubar/menubar-sub/menubar-sub.component';
import { MenubarSubContentComponent } from './components/menubar/menubar-sub-content/menubar-sub-content.component';
import { MenubarTriggerComponent } from './components/menubar/menubar-trigger/menubar-trigger.component';
import { MenubarSubTriggerComponent } from './components/menubar/menubar-sub-trigger/menubar-sub-trigger.component';
import { MenubarComponent } from './components/menubar/menubar/menubar.component';

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
  ChipsComponent,
  SelectComponent,
  DialogComponent,
  FileComponent,
  DialogBodyComponent,
  DialogHeaderComponent,
  DialogFooterComponent,
  CheckboxComponent,
  TextareaComponent,
  ColorPickerComponent,
  RadioComponent,
  PasswordComponent,
  InputComponent,
  LabelComponent,
  DatePickerComponent,
  AccordionComponent,
  BadgeComponent,
  MenubarContentComponent,
  MenubarItemComponent,
  MenubarMenuComponent,
  MenubarSeperatorComponent,
  MenubarShortcutComponent,
  MenubarSubComponent,
  MenubarSubContentComponent,
  MenubarTriggerComponent,
  MenubarSubTriggerComponent,
  MenubarComponent
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
