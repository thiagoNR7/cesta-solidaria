import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //criar um formulário com no mínimo 8 inputs e salvar cada informação em uma variável ???
  // depois transformar as informações em um objeto único chamado pessoa ???
  //na hora que clicar em cadastrar, mostrar o objeto no console ???

  //bonus: criar uma interface chamada Pessoa com os dados de chave valor define
 cadastroTitle = "Cadastro simples de usuário";

 nome: string = "";
 sobrenome: string = "";
 email: string = "";
 nascimento: string = "";
 cpf: string = "";
 telefone: string = "";
 cidade: string = "";

 Pessoa = {
   nome: (this.nome + ' ' + this.sobrenome),
   sobrenome: this.sobrenome,
   email: this.email,
   nascimento: this.nascimento,
   cpf: this.cpf,
   telefone: this.telefone,
   cidade: this.cidade
  
  }
 
 cadastrar(){
  console.log(this.Pessoa, (this.nome + ' ' + this.sobrenome));
 }
 
}

interface Pessoa{
nome: string;
sobrenome: string;
email?: string;
nascimento: string;
cpf?: number;
telefone: string;
cidade: string;
}
function detalhes(Pessoa: Pessoa){
  return `${Pessoa.nome} ${Pessoa.sobrenome} ${Pessoa.email} ${Pessoa.nascimento} ${Pessoa.cpf} ${Pessoa.telefone} ${Pessoa.cidade} `;
}
let thiago = {
name: 'Thiago',
sobrenome: 'Ramalho',
cidade: 'SP',
};



console.log(detalhes);
