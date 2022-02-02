import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete-driven-validation',
  templateUrl: './templete-driven-validation.component.html',
  styleUrls: ['./templete-driven-validation.component.scss']
})
export class TempleteDrivenValidationComponent implements OnInit {

  constructor() { }


  autocompleteHTML =
  `  <form name="form" (ngSubmit)="f.form.valid && onSubmit()" #f="ngForm">
  <mat-form-field fxFlex="auto" appearance="outline">
      <mat-label>Customer Name</mat-label>
      <input matInput type="text" name="firstName" class="form-control" [(ngModel)]="model.firstName" #firstName="ngModel" 
      [ngClass]="{ 'is-invalid': f.submitted && firstName.invalid }" required>
      <div *ngIf="f.submitted && firstName.invalid" class="invalid-feedback">
          <div *ngIf="firstName.errors.required">First Name is required</div>
      </div>
  </mat-form-field>
  <div class="text-center">
      <button class="btn btn-primary mr-1">Register</button>
      <button class="btn btn-secondary" type="reset">Cancel</button>
  </div>
</form>


`;

autocompleteJS = `
model: any = {};

onSubmit() {
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
}`;

  ngOnInit() {
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
