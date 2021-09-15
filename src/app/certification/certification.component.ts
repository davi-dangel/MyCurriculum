import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})

export class CertificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  certificados: any = [
    {
      nome: "Desenvolvimento SPA com Angular",
      imgSrc: "assets/Certificado_DesenvolvimentoSPAcomAngular.png",
      sobre: "Curso iniciante em Angular que explica como ele funciona e propõe um projeto inicial.",
      validacao: "https://desenvolvedor.io/certificados/18c7c13b-a4dc-452e-8597-73d6115dd1d2"
    },
    {
      nome: "Certificado Iniciando com ASP .NET Core",
      imgSrc: "assets/Certificado_IniciandocomASP.NETCore.png",
      sobre: "Curso iniciante em ASP .NET Core que explica como ele funciona e ensina como trabalhar com Entity Framework.",
      validacao: "https://desenvolvedor.io/curso/certificado/f9a5fc5f-9bcf-4308-bf17-b0bde1e78378"
    },
    {
      nome: "Testes de unidade e TDD com xUnit",
      imgSrc: "assets/Testes_de_unidade_e_TDD.png",
      sobre: "Curso bastante abrangente sobre testes unitários práticos, explica como TDD funciona e da várias dicas de boas práticas de programação.",
      validacao: "https://cursos.alura.com.br/certificate/974ce605-d78b-495d-8ca2-fd30fd87652a"
    },
    {
      nome: "Desenvolvimento de Carreira",
      imgSrc: "assets/Desenvolvimento_de_carreira.png",
      sobre: "Curso que aborda as motivações de uma mudança na carreira e propõe expor o que o mercado espera do colaboradores.",
      validacao: "https://cursos.alura.com.br/certificate/e95f28f0-6e1d-41d7-b8a4-ab06f6236f62"
    },

  ]

}
