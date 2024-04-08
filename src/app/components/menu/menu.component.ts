import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interfaces/menu.interfaces';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  isMenuOpen = false;
  menuPainelA: Menu = {
    title: 'painel Administrativo',
    path: '/login',
  };
  menuPainelB: Menu = {
    path: '',
    title: 'Home',
  };
  menuPainelC: Menu = {
    path: '/map',
    title: 'Pontos de Soliedariedade  ',
  };
  menus = [this.menuPainelA, this.menuPainelB, this.menuPainelC];

  closeOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
