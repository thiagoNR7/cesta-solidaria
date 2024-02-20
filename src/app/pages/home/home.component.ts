import { Component } from '@angular/core';
import { SocialLoginModule, SocialAuthServiceConfig, SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  constructor(private authService: SocialAuthService) { }


}

