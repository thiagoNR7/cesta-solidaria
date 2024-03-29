import { Component } from '@angular/core';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { News } from 'src/app/interfaces/news.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  noticiaAtual: string = '';
  posicaoAtual: number = 0;

  newsA: News = {
    id: 0,
    img: 'https://picsum.photos/920/230',
    title: 'titulo noticia A',
  };
  newsB: News = {
    id: 0,
    img: 'https://picsum.photos/920/230',
    title: 'titulo noticia B',
  };
  newsC: News = {
    id: 0,
    img: 'https://picsum.photos/920/230',
    title: 'titulo noticia C',
  };
  news = [this.newsA, this.newsB, this.newsC];

  constructor(private authService: SocialAuthService) {}
  ngOnInit(): void {
    this.exibirNoticia(0);
  }
  exibirNoticia(posicao: number): void {
   this.noticiaAtual
   this.news[posicao];
  }

  getNextNews(): void {
    this.posicaoAtual++;
    if(this.posicaoAtual >= this.news.length) {
      this.posicaoAtual = 0
    }
    this.exibirNoticia(this.posicaoAtual)
  }
}
