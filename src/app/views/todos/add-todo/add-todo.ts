import { Component, inject, signal } from "@angular/core";
import { FormsModule, type NgForm } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

import { NotificationService } from "@app/shared/components";
import { TodoModel, TodosService } from "../shared";

@Component({
	selector: "app-add-todo",
	imports: [FormsModule, RouterLink],
	templateUrl: "./add-todo.html",
	styleUrl: "./add-todo.scss",
})
export class AddTodo {
	private readonly router = inject(Router);
	private readonly todoService = inject(TodosService);
	private readonly notificationService = inject(NotificationService);

	protected showValidationErrors = signal(false);

	onFormSubmit(form: NgForm) {
		if (form.invalid) {
			this.showValidationErrors.set(true);
			return;
		}

		const todo = new TodoModel(form.value.text);

		this.todoService.addTodo(todo);
		this.router.navigateByUrl("/todos");
		this.notificationService.show("✅ Created todo!");
	}
}
