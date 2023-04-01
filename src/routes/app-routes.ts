import {Routes} from "@angular/router";
import {NotFoundComponent} from "../app/modules/core/components/not-found/not-found.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'contacts'},
  {
    path: 'contacts',
    loadChildren: () => import('../app/modules/contacts-list/contacts-list.module')
      .then((module) => module.ContactsListModule),
  },
  {
    path: 'add',
    loadChildren: () => import('../app/modules/contact-add/contact-add.module')
      .then((module) => module.ContactAddModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];
