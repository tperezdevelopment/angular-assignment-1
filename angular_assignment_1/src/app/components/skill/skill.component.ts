import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  animations: [
    trigger('widthAnimation', [
      state('void', style({ width: '0%' })),
      transition('void <=> *', animate('500ms ease-in-out')),
    ])
  ]
})
export class SkillComponent implements OnInit {
  @Input() skills: any;

  ngOnInit(): void {
    this.skills.forEach((skill: any) => {
      skill.initialWidth = '0%';
      setTimeout(() => {
        skill.initialWidth = skill.percent + '%';
      }, 100); 
    });
  }
}
