import { AuthenticationService } from '../service/authentication.service';
import { Profile} from '../model/profile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: Profile = new Profile();

  connected = false;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.profile)
      .subscribe(
        (data) => {alert("ok"),console.log(data)},
        (error) => {alert("ko"),console.log(error)});
    //this.profile = new Profile();
  }

}
