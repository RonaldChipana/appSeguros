import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { CLIENTES } from '../shared/clientes';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cli: Cliente;
  clientes: Cliente[];
  constructor() {  }

  ngOnInit() {
    this.clientes = CLIENTES;
    this.cli = {
        nombre: '',
        telefono: '',
        celular: '',
        correo: '',
        direccion: ''
        };
  }
  registrar() {
     this.clientes.push(this.cli);
  }
}
