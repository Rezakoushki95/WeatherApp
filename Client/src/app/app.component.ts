import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCold: boolean = true;
  bodyClass: string = ""
  containerClass: string = ""

  ngOnInit(): void {
    this.simulateFetchTemperature(); 
    console.log("init called")
  }

  simulateFetchTemperature(): void {
    const simulatedTemperature = 9;
    this.isCold = simulatedTemperature < 10;
    console.log("simulate called")
    this.updateClasses();
  }

  updateClasses(): void {
    this.bodyClass = this.isCold ? 'cold-body' : 'hot-body';
    this.containerClass = this.isCold ? 'cold-container' : 'hot-container';

    console.log("update called")
  }
}
