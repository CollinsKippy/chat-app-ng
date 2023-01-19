import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NavbarComponent,
    ChatListComponent,
    ChatFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
