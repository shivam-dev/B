import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OrganicTrackerSheetComponent } from './organic-tracker-sheet/organic-tracker-sheet.component';

const appRoutes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-organic-tracker-sheet',      component: OrganicTrackerSheetComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OrganicTrackerSheetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
