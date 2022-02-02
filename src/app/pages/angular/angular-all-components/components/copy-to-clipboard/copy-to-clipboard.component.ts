import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryState } from 'src/app/pages/ui/forms/form-elements/form-elements.component';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'vex-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates$: Observable<CountryState[]>;
  icClose = icClose;
  icArrowDropDown = icArrowDropDown;
  states: CountryState;
  constructor() { }
  
  autocompleteJS =
  `  copyToClipboard(val: string) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
  }`;
  autocompleteHTML =
  `  <h6 (click)="copyToClipboard(lead.id)" [title]="click to copy">Copy to clip board </h6>`;

ngOnInit() {
}

copyToClipboard(val: string) {
  let selBox = document.createElement("textarea");
  selBox.style.position = "fixed";
  selBox.style.left = "0";
  selBox.style.top = "0";
  selBox.style.opacity = "0";
  selBox.value = val;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand("copy");
  document.body.removeChild(selBox);
}

}
