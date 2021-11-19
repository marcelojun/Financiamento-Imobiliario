
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-denied-form',
  templateUrl: './denied-form.component.html',
  styleUrls: ['./denied-form.component.css']
})

export class DeniedFormComponent implements OnInit {

  public erroMensagem!: string

  constructor() {
  }

  ngOnInit(): void {
  }
}
