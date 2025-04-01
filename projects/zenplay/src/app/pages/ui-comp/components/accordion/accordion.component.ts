import { Component } from '@angular/core';
import { ZenUiModule } from '../../../../../../../zenui/src/public-api';

@Component({
  selector: 'app-accordion',
  imports: [ZenUiModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  data = [
    {

      id: "1",
      header:'First Accordion',
      data: 'Frontend system design is an essential skill for developers aiming to build robust and scalable applications. This article delves into the frontend system design of a Google Calendar-like application. We’ll walk you through the entire process, emphasizing requirements gathering, high-level architecture design, API design, edge case management, client data modeling, and optimization strategies'
    },
    {
      id: "2",
      header:'First Accordion',
      data: 'Frontend system design is an essential skill for developers aiming to build robust and scalable applications. This article delves into the frontend system design of a Google Calendar-like application. We’ll walk you through the entire process, emphasizing requirements gathering, high-level architecture design, API design, edge case management, client data modeling, and optimization strategies'
    },
    {
      id: "3",
      header:'First Accordion',
      data: 'Frontend system design is an essential skill for developers aiming to build robust and scalable applications. This article delves into the frontend system design of a Google Calendar-like application. We’ll walk you through the entire process, emphasizing requirements gathering, high-level architecture design, API design, edge case management, client data modeling, and optimization strategies'
    },
    {
      id: "4",
      header:'First Accordion',
      data: 'Frontend system design is an essential skill for developers aiming to build robust and scalable applications. This article delves into the frontend system design of a Google Calendar-like application. We’ll walk you through the entire process, emphasizing requirements gathering, high-level architecture design, API design, edge case management, client data modeling, and optimization strategies'
    },
    {
      id: "5",
      header:'First Accordion',
      data: 'Frontend system design is an essential skill for developers aiming to build robust and scalable applications. This article delves into the frontend system design of a Google Calendar-like application. We’ll walk you through the entire process, emphasizing requirements gathering, high-level architecture design, API design, edge case management, client data modeling, and optimization strategies'
    },
    {
      id: "6",
      header:'First Accordion',
      data: 'Frontend system design is an essential skill for developers aiming to build robust and scalable applications. This article delves into the frontend system design of a Google Calendar-like application. We’ll walk you through the entire process, emphasizing requirements gathering, high-level architecture design, API design, edge case management, client data modeling, and optimization strategies'
    },
    
  ]
}
