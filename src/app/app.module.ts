import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/register-user/home/home.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    FormComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
