import { Component } from '@angular/core';

const NAVIGATION_MENU_ITEMS = [
  {
    name: 'Список контактов',
    routerLink: ['/', 'contacts'],
    iconType: 'team',
  },
  {
    name: 'Посмотреть контакт',
    routerLink: ['/', 'contact'],
    iconType: 'user',
  },
  {
    name: 'Добавить контакт',
    routerLink: ['/', 'add'],
    iconType: 'user-add',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public menuItems = NAVIGATION_MENU_ITEMS;

  constructor() {
  }
}
