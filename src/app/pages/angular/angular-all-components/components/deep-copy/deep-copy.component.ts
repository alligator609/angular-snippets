import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryState } from 'src/app/pages/ui/forms/form-elements/form-elements.component';
import icArrowDropDown from '@iconify/icons-ic/twotone-arrow-drop-down';
import icClose from '@iconify/icons-ic/twotone-close';
import { startWith } from 'rxjs/operators';
@Component({
  selector: 'vex-deep-copy',
  templateUrl: './deep-copy.component.html',
  styleUrls: ['./deep-copy.component.scss']
})
export class DeepCopyComponent implements OnInit {

  stateCtrl: FormControl;
  filteredStates$: Observable<CountryState[]>;
  icClose = icClose;
  icArrowDropDown = icArrowDropDown;
  states: CountryState;
  constructor() { }
  
  autocompleteHTML =
  `  JSON.parse(JSON.stringify(transfer))`;

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
