import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ReqResResponse, ReqUser } from '../models/user';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarios: ReqUser[] = [];
  selectedAvatar: string | null = null;
  form: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['']
    });
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.apiService.cargarUser().subscribe(
      (response: ReqResResponse) => {
        this.usuarios = response.data;
        console.log(this.usuarios);
      }
    );
  }

  onSeleccionar() {
    const selectedUserId = this.form.get('usuario')?.value;
    const selectedUser = this.usuarios.find(user => user.id === +selectedUserId);
    this.selectedAvatar = selectedUser ? selectedUser.avatar : null;
  }
}
