import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user?: SocialUser;
  loggedIn?: boolean;

  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log('logged-user', user)
      this.user = user;
      this.loggedIn = (user != null);
    }, err =>{
      console.log('error', err)
    });
  }
}
