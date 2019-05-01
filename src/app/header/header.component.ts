import { AuthenticationService } from '../service/authentication.service';
import { CurrentUser} from '../model/currentUser';
import { Authentication } from '../model/authentication';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private authentication : Authentication = new Authentication();
  private currentuser : CurrentUser;

  connected = false;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.authentication)
      .subscribe(
        (data : CurrentUser)=>
                  {
                    localStorage.setItem("user",this.authentication.login);
                    localStorage.setItem("token",data['authToken']);
                    alert("ok "+ data['authToken']);
                    console.log(data['authToken']);
                  },
        error =>
                  {
                    alert("ok "+ error['error']['message']);
                    console.log(error['error']['message']);
                    console.log(error['message']);
                  }
      )};
}
