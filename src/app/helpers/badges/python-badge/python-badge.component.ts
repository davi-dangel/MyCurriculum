import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'python-badge',
  templateUrl: './python-badge.component.html',
  styleUrls: ['./python-badge.component.css']
})
export class PythonBadgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shareTemplate(){
    return '<python-badge></python-badge>'
  }
}
