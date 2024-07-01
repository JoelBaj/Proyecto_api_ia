import { Component } from '@angular/core';

interface MenuItem{
  texto:string;

}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  Menu:MenuItem[] =[
    {texto:'joel'},
    {texto:'Favoritos'},
    
  ]
}
