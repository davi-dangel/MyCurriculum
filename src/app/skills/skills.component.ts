import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'buffer'
  constructor() { }

  ngOnInit(): void {
  }

}
