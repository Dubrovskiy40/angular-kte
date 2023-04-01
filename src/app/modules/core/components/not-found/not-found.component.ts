import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private readonly router: Router,
  ) {}

  public redirectToMain() {
    void this.router.navigate(['/', 'contacts']);
  }
}
