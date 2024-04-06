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
  menuPainel: Menu = {
    title: 'painel Administrativo',
    path: '/login',
  };
  menus = [this.menuPainel];
 

  closeOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
