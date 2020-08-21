import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';
import '@angular/compiler';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [AppComponent, ProfileComponent, UsersComponent],
  imports: [BrowserModule, HttpModule, FormsModule],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
