import { Component } from '@angular/core';

const NAVIGATION_MENU_ITEMS = [
  {
    name: 'Список контактов',
    routerLink: ['/', 'contacts'],
    iconType: 'team',
  },
  {
    name: 'Добавить контакт',
    routerLink: ['/', 'add'],
    iconType: 'user-add',
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems = NAVIGATION_MENU_ITEMS;
}
