import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-register-flight',
  templateUrl: './register-flight.component.html',
  styleUrls: ['./register-flight.component.scss']
})
export class RegisterFlightComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});
  listCitys: Array<{
    value: string,
    nameCity: string
  }> = [
    {value: 'Marte', nameCity: 'Marte'},
    {value: 'Jupiter', nameCity: 'Jupiter'},
    {value: 'Saturno', nameCity: 'Saturno'},
  ];
  selected: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,

    private _formBuilder: FormBuilder,
    private _serviceFlight: FlightsService,
    private dialogRef: MatDialogRef<RegisterFlightComponent>,
  ) { }

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      id                    : [this.data ? this.data.element.id : "", Validators.required],
      location              : ['', Validators.required],
      arrival               : [this.data ? this.data.element.arrival : '', Validators.required],
      output                : [this.data ? this.data.element.output : '', Validators.required],
      passengers            : [this.data ? this.data.element.passengers : '', Validators.required],
      pilot                 : [sessionStorage.getItem('name'), Validators.required]
    });
    this.data ? this.selected = this.data.element.location : null
  }  
  
  saveFlight = () => {
    this.signInForm.controls['location'].setValue(this.selected)
    this._serviceFlight.addFlights(this.signInForm.value);
    this.dialogRef.close();
  }
  
  updateFlight = () => {
    this.signInForm.controls['location'].setValue(this.selected)
    this._serviceFlight.updateFlights(this.signInForm.value);
    this.dialogRef.close();
  }
}
