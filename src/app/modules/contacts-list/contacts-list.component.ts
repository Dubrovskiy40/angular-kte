import {Component} from '@angular/core';
import {ContactsListService} from "./contacts-list.service";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  constructor(
    private readonly contactsListService: ContactsListService,
  ) {
    this.contactsListService.getContactsList();
  }
}
