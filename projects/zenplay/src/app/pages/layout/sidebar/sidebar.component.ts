import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  links:any[] = [
    {
      path: "/dashboard/button",
      title: "Button",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/checkbox",
      title: "Checkbox",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/radio",
      title: "Radio",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/input",
      title: "Input",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/select",
      title: "Select",
      icon: "fa fa-circle"
    },
  ];
}
