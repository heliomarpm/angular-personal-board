import { DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly dateTime = signal(new Date());

  ngOnInit() {
    setInterval(() => {
      this.dateTime.set(new Date());
    }, 1000);
  }
}
