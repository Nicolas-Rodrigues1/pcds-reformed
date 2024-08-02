import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { EmailService } from 'src/app/core/services/email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AutenticacaoService,
    private emailService: EmailService
  ){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;
      this.authService.autenticar(email, senha).subscribe({
        next: (value) => {
          console.log('Autenticado', value);
          this.router.navigateByUrl('/auth/home');
          this.loginForm.reset();
        },
        error: (err) => {
          console.log('Problema', err)
        }
      })
      this.emailService.setEmail(email);

    }
  }

}
