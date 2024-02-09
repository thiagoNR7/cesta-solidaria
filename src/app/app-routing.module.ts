import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { HomeComponent } from './pages/register-user/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'cadastro', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
