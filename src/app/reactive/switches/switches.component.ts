import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [false,Validators.required],
    condiciones: [true,Validators.requiredTrue]
  })

  persona = {
    genero: 'M',
    notificaciones: true
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset(
      {...this.persona,
        condiciones:false
      })

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
      this.persona = rest
    })
  }

  guardar(){

    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones

    this.persona = formValue
  }

}
