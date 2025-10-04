import { effect, Injectable, inject, type OnDestroy, signal } from "@angular/core";
import { NotificationService } from "@app/shared/components";
import { fromEvent, type Subscription } from "rxjs";

import type { INote } from "./note.model";

const LS_DATA_KEY = "personal_dash-notes";

@Injectable({
	providedIn: "root",
})
export class NotesService implements OnDestroy {
	protected readonly notificationService = inject(NotificationService);
	private storageListenSub: Subscription;
	private readonly notesSig = signal<INote[]>([]);

	notes = this.notesSig.asReadonly();

	constructor() {
		this.loadState();

		this.storageListenSub = fromEvent<StorageEvent>(window, "storage").subscribe((event: StorageEvent) => {
			if (event.key === LS_DATA_KEY) this.loadState();
		});

		// autosave after any changes
		effect(() => {
			localStorage.setItem(LS_DATA_KEY, JSON.stringify(this.notesSig()));
			// this.notificationService.show("Todos saved!");
		});
	}

	ngOnDestroy() {
		if (this.storageListenSub) this.storageListenSub.unsubscribe();
	}

	get(id: string) {
		return this.notesSig().find((item) => item.id === id);
	}

	add(note: INote) {
		this.notesSig.update((notes) => [...notes, note]);
		this.notificationService.success("✅ Created note!");
	}

	update(id: string, updatedFields: Partial<INote>) {
		this.notesSig.update((notes) => notes.map((note) => (note.id === id ? { ...note, ...updatedFields } : note)));
		this.notificationService.success("Note updated successfully!");
	}

	delete(id: string) {
		this.notesSig.update((notes) => notes.filter((note) => note.id !== id));
		this.notificationService.success("🗑️ Deleted note!");
	}

	loadState() {
		try {
			const itemsInStorage = JSON.parse(localStorage.getItem(LS_DATA_KEY) || "[]") as INote[];
			this.notesSig.set(itemsInStorage);
		} catch (e) {
			console.error("There was an error retrieving the todos from localStorage", e);
			this.notificationService.error("There was an error retrieving the todos from localStorage. See console for details.");
		}
	}
}
