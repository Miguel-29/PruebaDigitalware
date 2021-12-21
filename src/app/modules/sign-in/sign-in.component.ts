import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({});

  constructor(
    private _formBuilder: FormBuilder,
    private _serviceAuth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this._formBuilder.group({
      user     : ['', Validators.required],
      password          : ['', Validators.required],
    });
  }

  signIn(): void
    {
        if ( this.signInForm.invalid )
        {
            return;
        }

        this.signInForm.disable();

        sessionStorage.removeItem('user');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('lastname');
        
        let user = this._serviceAuth.validateUser(this.signInForm.value)

        if(user){
          sessionStorage.setItem('user', user.user);
          sessionStorage.setItem('name', user.name);
          sessionStorage.setItem('lastname', user.lastName);
          this._router.navigate(['/home'])
        }
        
        this.signInForm.enable();
    }  

}
