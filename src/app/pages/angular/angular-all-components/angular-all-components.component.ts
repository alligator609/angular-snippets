import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { CopyToClipboardComponent } from './components/copy-to-clipboard/copy-to-clipboard.component';

@Component({
  selector: 'vex-angular-all-components',
  templateUrl: './angular-all-components.component.html',
  styleUrls: ['./angular-all-components.component.scss'],
  animations: [
    stagger80ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class AngularAllComponentsComponent implements OnInit {
  menuWidth = '250px';

  @ViewChild(CopyToClipboardComponent, { read: ElementRef, static: true }) private clipboard: ElementRef;
  
  constructor(
    private scrollDispatcher: ScrollDispatcher,
    private elem: ElementRef) { }

  ngOnInit() {
  }

  scrollTo(elem: string) {
    this.scrollDispatcher.getAncestorScrollContainers(this.elem)[0].scrollTo({
      top: this[elem].nativeElement.offsetTop - 24,
      behavior: 'smooth'
    });
  }
}
