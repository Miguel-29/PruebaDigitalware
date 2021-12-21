import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-pilot',
  templateUrl: './register-pilot.component.html',
  styleUrls: ['./register-pilot.component.scss']
})
export class RegisterPilotComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  listCitys: Array<{
    value: string,
    nameCity: string
  }> = [
    {value: 'bogota', nameCity: 'Bogotá'},
    {value: 'medellin', nameCity: 'Medellin'},
    {value: 'cali', nameCity: 'Cali'},
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    private _formBuilder: FormBuilder,
    private _serviceAuth: AuthService,
    private dialogRef: MatDialogRef<RegisterPilotComponent>,
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.signInForm = this._formBuilder.group({
      id                  : [this.data ? this.data.element.id : '', Validators.required],  
      user                : [this.data ? this.data.element.user : '', Validators.required],
      password            : [this.data ? this.data.element.password : '', Validators.required],
      role                : [this.data ? this.data.element.role : '', Validators.required],
      name                : [this.data ? this.data.element.name : '', Validators.required],
      lastName            : [this.data ? this.data.element.lastName : '', Validators.required],
      age                 : [this.data ? this.data.element.age : '', Validators.required],
      years_experience    : [this.data ? this.data.element.years_experience : '', Validators.required],
      nationality         : [this.data ? this.data.element.nationality : '', Validators.required],      
    });
  }

  savePilot = () => {
    this._serviceAuth.addUser(this.signInForm.value);
    this.dialogRef.close()
  }

  updatePilot = () => {
    this._serviceAuth.updateUser(this.signInForm.value);
    this.dialogRef.close();
  }

}
