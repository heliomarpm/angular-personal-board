import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss'
})
export class Tabs { }
