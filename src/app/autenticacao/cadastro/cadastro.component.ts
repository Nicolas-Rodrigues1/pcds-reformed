import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { FormValidations } from 'src/app/shared/form-validations';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  cadastroForm!: FormGroup;

  @Input() title = 'Crie seu cadastro';
  @Input() textoBotao = 'CADASTRAR';
  @Output() acaoClique: EventEmitter<void> = new EventEmitter<void>();
  @Output() sair: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private router: Router

  ){}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, [Validators.required]],
      confirmarEmail: [null, [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      aceitarTermos: [false, [Validators.requiredTrue]]
    })

    this.formularioService.setCadastro(this.cadastroForm);
  }

  cadastrar(){
    const formCadastro = this.formularioService.getCadastro();
    console.log(formCadastro?.value)
    this.router.navigate(['/auth/login'])
  }

  deslogar(){
    this.sair.emit()
  }

}

