import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from "rxjs";
import {ApiServiceService} from "./api-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'ui';
  apiResult: Observable<string> = new Observable<string>();

  constructor(private apiService: ApiServiceService) {
  }
  ngOnInit(): void {
    this.apiResult = this.apiService.getData();
  }
}
