import { CallNumber } from '@ionic-native/call-number/ngx';
import { User } from 'src/app/model/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuarios: User[];

  constructor(private userservice: UserService, private callNumber: CallNumber) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.userservice.get().subscribe(usuarios => this.usuarios = usuarios);
  }

  // No funciona al tener dentro de un ion-item con un router-link
  // si usamos en el ion-button un $event.stopPropagation(); sí que se llama
  // pero a continuación nos lleva al detalle a través del router-link.
  llamarNumero(numero: string) {
    console.log('Preparando llamada al número: ' + numero);

    this.callNumber.callNumber(numero, true)
      .then(res => console.log('Ejecutando llamada al número: ' + numero))
      .catch(err => console.log('Error ejecutando la llamada al número indicado', err));
  }
}
