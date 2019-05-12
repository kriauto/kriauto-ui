import { AuthenticationService } from '../../service/authentication.service';
import { Currentuser} from '../../model/currentuser';
import { Authentication } from '../../model/authentication';
import { Component, OnInit } from '@angular/core';
import { Message } from "../../model/message";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Router, RouterStateSnapshot} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private authentication : Authentication = new Authentication();
  private currentuser : Currentuser;
  private connected : Boolean;
  private message: Message;

  constructor(private authenticationservice : AuthenticationService,private modalService: NgbModal) { }

  ngOnInit() {
    this.connected = false;
    this.message = null;
  }

  login() {
    this.authenticationservice.login(this.authentication)
      .subscribe(
        data =>
                  {
                    this.currentuser = data;
                    this.authenticationservice.addToken(this.currentuser.authToken.toString());
                    const text = 'success';
                    this.message = new Message(text,'success','A2');
                    //console.log(data);
                    //this.router.navigate(['/welcome'], { queryParams: { returnUrl: this.state.url }});
                  },
        error =>
                  {
                    const text = error['error']['message'];
                    //console.log(error);
                    this.message = new Message(text,'error','A2');
                  }
      )};

  open(content) {
    this.authentication = new Authentication();
    this.message = null;
    this.modalService.open(content)
  }

}
