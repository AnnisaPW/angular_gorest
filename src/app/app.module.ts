import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/a.user-list/user-list.component';
import { UserDetailComponent } from './components/b.user-detail/user-detail.component';
import { UserEditComponent } from './components/c.user-edit/user-edit.component';
import { UserInputComponent } from './components/d.user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserInputComponent,
    UserEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
