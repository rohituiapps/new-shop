import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bsnavbar.component.html',
  styleUrls: ['./bsnavbar.component.css']
})
export class BsnavbarComponent implements OnInit {
 
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
