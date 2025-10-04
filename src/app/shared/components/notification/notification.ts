import { Component, inject } from "@angular/core";

import { NotificationService } from "./notification.service";

@Component({
	selector: "app-notification",
	imports: [],
	template: `
		@if (notification(); as n) {
		<div class="notification" [class]="{ error: n.text.startsWith('Error:') }">
			{{ n.text }}
		</div>
	}`,
	styleUrl: "./notification.scss",
})
export class Notification {
	private readonly notificationService = inject(NotificationService);

	notification = this.notificationService.notification;
}
