import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ContactsListService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getContactsList() {
    this.http
      .get('https://reqres.in/api/users?per_page=12/')
      .subscribe((data) => console.log('data',data));
  }
}
