import { Component, OnInit } from '@angular/core';
import { Collaborator } from 'src/app/models/collaborator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['foto', 'nome', 'email', 'cpf', 'cargo', 'setor', 'excluir', 'editar', 'detalhes'];
  dataSource: Collaborator[] = [
    {nome: 'Igor A Pierote',
    email: 'igor@gmail.com',
    cpf: '000.000.000-00',
    cargo: 'T.I Junior',
    setor: 'Desenvolvedor',
    estado: 'SP',
    cidade: 'São Bernardo Do Campo',
    remuneracao: 1,
    dataNascimento: new Date(),
    fotoUrl: "https://avatars.githubusercontent.com/u/113553900?v=4"},
    {nome: 'Guilherme Marques',
    email: 'gui@gmail.com',
    cpf: '000.000.000-00',
    cargo: 'Enfermeiro Chefe',
    setor: 'Saúde',
    estado: 'SP',
    cidade: 'São Bernardo Do Campo',
    remuneracao: 9999999,
    dataNascimento: new Date(),
    fotoUrl: "https://media-exp1.licdn.com/dms/image/C4E03AQGrmuzzrU5bYQ/profile-displayphoto-shrink_400_400/0/1607439008428?e=1674691200&v=beta&t=zCkVeeO5NA2__hZsqYCrnyFDqgUO8Zm4V6EALMNI_vw"}
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
