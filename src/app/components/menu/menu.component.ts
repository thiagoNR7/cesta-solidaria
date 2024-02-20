import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements  OnInit {
  constructor(private router: Router) { }


  ngOnInit(){
    if(this.UsuarioNaPagina()){
 // eu sou usuario
    }
   else{
    this.router.navigate([''])
    this.FazerLogout()
    // se eu não sou usuario ir para home
   } 
    
    
    }
  FazerLogout() {
    return this.router.url.includes('')
    
  } 
  UsuarioNaPagina(): boolean{
   return this.router.url.includes('/cadastro')
  }

  }
