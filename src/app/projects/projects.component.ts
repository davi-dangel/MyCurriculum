import { Component, OnInit } from '@angular/core';
import { PythonBadgeComponent } from '../helpers/badges/python-badge/python-badge.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})



export class ProjectsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  setBadgeVisible(itemBadges: any, badge: string){
    let hasBadge = itemBadges.badges.find((x: any) => x === badge);
    
    if(hasBadge) return true
  
    return false
  }

  badges: any = {
    c_sharp: "c_sharp",
    dot_net: "dot_net",
    html: "html",
    css: "css",
    typescript: "ts",
    javascript: "js",
    jquery: "jquery",
    angular: "angular",
    bootstrap: "bootstrap",
    python: 'python',
    sql: 'sql'
  };

  projetos: any = [
    {
      header: "MyCurriculum",
      titulo: "Aplicação front-end do meu portifólio",
      texto: "Código do portifólio que você está acessando agora",
      link: "https://github.com/davi-dangel/MyCurriculum",
      badges: [
        this.badges.html, 
        this.badges.css, 
        this.badges.typescript, 
        this.badges.javascript, 
        this.badges.angular, 
        this.badges.bootstrap
      ]
    },
    {
      header: "PyAssistence",
      titulo: "Assistente virtual em python",
      texto: "Assistente virtual que possui várias funções(todas feitas em python) para me auxiliar",
      link: "https://github.com/davi-dangel/PyAssistence",
      badges: [this.badges.python]
    }
  ];
}
