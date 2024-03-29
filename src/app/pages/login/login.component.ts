import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  adminUser = 'thiagonovato65@gmail.com';

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit() { 
    this.authService.authState.subscribe(
      (user) => {
        const userLogged = user.email;
        if (userLogged === this.adminUser) {
        console.log('usuario com acesso administrativo', user.name )
        this.router.navigate(['/cadastro'])
        }else{
          this.signOut()
          this.router.navigate([''])
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
