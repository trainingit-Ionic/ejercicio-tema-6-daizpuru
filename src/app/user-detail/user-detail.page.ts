import { CallNumber } from '@ionic-native/call-number/ngx';
import { User } from 'src/app/model/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit {

  user: User;

  private userId: number;

  constructor(private route: ActivatedRoute, private userService: UserService, private callNumber: CallNumber) { }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');

    console.log('Identificador del usuario recuperado: ' + userId);

    this.userId = Number(userId);

    if (!isNaN(this.userId)) {
      this.userService.getOne(this.userId).subscribe(
        usuario => this.user = usuario
      );
    }
  }

  llamarUsuario() {
    console.log('Preparando llamada al número: ' + this.user.phone);

    this.callNumber.callNumber(this.user.phone, true)
      .then(res => console.log('Ejecutando llamada al número: ' + this.user.phone))
      .catch(err => console.log('Error ejecutando la llamada al número indicado', err));
  }

}
