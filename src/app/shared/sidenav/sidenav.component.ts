import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/autenticacao/services/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  opened: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
