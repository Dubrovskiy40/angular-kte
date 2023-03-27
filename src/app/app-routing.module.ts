import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'main'},
  {
    path: 'main',
    loadChildren: () => import('./modules/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./modules/contacts-list/contacts-list.module').then(m => m.ContactsListModule)
  },
  {
    path: 'contact/:id',
    loadChildren: () => import('./modules/contact-add/contact-add.module').then(m => m.ContactAddModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
