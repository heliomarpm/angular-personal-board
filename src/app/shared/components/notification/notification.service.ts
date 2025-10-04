import { Injectable, signal } from "@angular/core";
// import { Subject } from 'rxjs';

import type { INotification } from "./notification.model";

@Injectable({
	providedIn: "root",
})
export class NotificationService {
	// private notification$: Subject<INotification> = new Subject()
	private readonly _notification = signal<INotification | null>(null);
	public readonly notification = this._notification.asReadonly();
	show(text: string, duration = 5000) {
		// this.notification$.next({ text, duration })
		this._notification.set({ text, duration });
		setTimeout(() => this.clear(), duration);
	}

	showError(text: string, duration = 8000) {
		this.show(`Error: ${text}`, duration);
	}

	clear() {
		this._notification.set(null);
	}
}
