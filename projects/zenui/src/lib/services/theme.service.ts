import { Injectable } from '@angular/core';
import setGlobalColorTheme, { ThemeColors } from '../types/colors';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { }

  setTheme(themeName:ThemeColors){
    setGlobalColorTheme("light", themeName);
  }

}
