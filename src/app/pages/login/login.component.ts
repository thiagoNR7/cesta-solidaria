import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  adminUser = 'thiagonovato65@gmail.com';

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe(
      (user) => {
        const userLogged = user.email;
        if (userLogged === this.adminUser) {
        console.log('usuario com acesso administrativo', user.name )
        }else{
          console.log('usuario sem acesso administrativo', user.name)
        }
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
  signOut(): void {
    this.authService.signOut();
    
  }
}
