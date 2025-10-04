import { effect, Injectable, inject, type OnDestroy, signal } from "@angular/core";
import { NotificationService } from "@app/shared/components";
import { fromEvent, type Subscription } from "rxjs";

import type { ITodo } from "./todo.model";

@Injectable({
	providedIn: "root",
})
export class TodosService implements OnDestroy {
	protected readonly notificationService = inject(NotificationService);
	private storageListenSub: Subscription;
	private readonly todosSig = signal<ITodo[]>([]);

	todos = this.todosSig.asReadonly();

	constructor() {
		this.loadState();

		this.storageListenSub = fromEvent<StorageEvent>(window, "storage").subscribe((event: StorageEvent) => {
			if (event.key === "todos") this.loadState();
		});

		// autosave after any changes
		effect(() => {
			localStorage.setItem("todos", JSON.stringify(this.todosSig()));
			// this.notificationService.show("Todos saved!");
		});
	}

	ngOnDestroy() {
		if (this.storageListenSub) this.storageListenSub.unsubscribe();
	}

	getTodo(id: string) {
		return this.todosSig().find((t) => t.id === id);
	}

	addTodo(todo: ITodo) {
		this.todosSig.update((todos) => [...todos, todo]);
		this.notificationService.show("✅ Created todo!");
	}

	updateTodo(id: string, updatedTodoFields: Partial<ITodo>) {
		this.todosSig.update((todos) => todos.map((t) => (t.id === id ? { ...t, ...updatedTodoFields } : t)));
		this.notificationService.show("Todo updated successfully!");
	}

	deleteTodo(id: string) {
		this.todosSig.update((todos) => todos.filter((t) => t.id !== id));
		this.notificationService.show("🗑️ Deleted todo!");
	}

	loadState() {
		try {
			const todosInStorage = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
			this.todosSig.set(todosInStorage);
		} catch (e) {
			console.error("There was an error retrieving the todos from localStorage", e);
			this.notificationService.showError("There was an error retrieving the todos from localStorage. See console for details.");
		}
	}
}
