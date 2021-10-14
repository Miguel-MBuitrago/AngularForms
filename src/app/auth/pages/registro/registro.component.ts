import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  
  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vs.noPuedeSerAsdf]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, ]],
  },{
    validators: [this.vs.camposIguales('password', 'passwordConfirm')]
  })

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;

    if( errors?.required){
      return 'El email es obligatorio'
    }else if(errors?.pattern){
      return 'El valor ingresado no tiene formato de email'
    }else if( errors?.emailTomado){
      return 'El email ya existe'
    }

    return ''
  }

  constructor( private fb: FormBuilder,
               private vs: ValidatorService, 
               private emailValidator: EmailValidatorService) {}


  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Miguel Buitrago',
      email: 'test@test.com',
      username: 'MBuitrago',
      password: '123456',
      passwordConfirm: '123456',
    })
  }

  campoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {

    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();

  }

  

}
