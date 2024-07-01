import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ReqResResponse, ReqUser } from '../../models/user';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarios: ReqUser[] = [];
  selectedAvatar: string | null = null;
  form: FormGroup;
  loading: boolean = false;
  loadingMessage: string = '';
  selectedUser: ReqUser | null = null;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      usuario: ['']
    });
  }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.loading = true; 
    this.apiService.cargarUser().subscribe(
      (response: ReqResResponse) => {
        this.usuarios = response.data;
        this.loading = false; 
        console.log(this.usuarios);
      }
    );
  }

  Seleccionar() {
    this.loading = true; 
    this.loadingMessage = 'Preparando datos a entrenar...';

    const selectedUserId = this.form.get('usuario')?.value;
    this.selectedUser = this.usuarios.find(user => user.id === +selectedUserId) || null;

    setTimeout(() => {
      this.loadingMessage = 'Reconocimiento de rostro...';
      setTimeout(() => {
        this.loadingMessage = 'Cargando resultados...';
        setTimeout(() => {
          this.selectedAvatar = this.selectedUser ? this.selectedUser.avatar : null;
          this.loading = false; 
        }, 1000); 
      }, 1000); 
    }, 1000); 
  }
}
