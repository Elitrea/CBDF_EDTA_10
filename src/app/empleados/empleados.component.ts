import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  empleados = [
    {id:1, nombre:"Juan", sueldo:450.45, activo:false},
    {id:2, nombre:"Luis", sueldo:252.65, activo:true},
    {id:3, nombre:"Ana", sueldo:234.83, activo:false},
    {id:4, nombre:"Karla", sueldo:342.56, activo:true},
    {id:5, nombre:"Luz", sueldo:467.32, activo:false},
    {id:6, nombre:"Miriam", sueldo:268.89, activo:false},
    {id:7, nombre:"Manuel", sueldo:149.48, activo:true},
    {id:8, nombre:"Axel", sueldo:246.93, activo:true},
    {id:9, nombre:"Eduardo", sueldo:370.26, activo:false},
    {id:10, nombre:"Miguel", sueldo:157.53, activo:false}
  ];
}
