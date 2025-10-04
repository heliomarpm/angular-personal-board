import { DatePipe } from "@angular/common";
import { Component, type OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Notification, Tabs } from "./shared/components";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, DatePipe, Tabs, Notification],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements OnInit {
	protected readonly dateTime = signal(new Date());

	ngOnInit() {
		setInterval(() => {
			this.dateTime.set(new Date());
		}, 1000);
	}
}
