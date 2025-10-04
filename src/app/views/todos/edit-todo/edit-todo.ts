import { Component, inject } from "@angular/core";
import { FormsModule, type NgForm } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NotificationService } from "@app/shared/components";
import { type ITodo, TodosService } from "../shared";

@Component({
	selector: "app-edit-todo",
	imports: [FormsModule, RouterLink],
	templateUrl: "./edit-todo.html",
	styleUrl: "./edit-todo.scss",
})
export class EditTodo {
	private readonly route = inject(ActivatedRoute);
	private readonly todoService = inject(TodosService);
	private readonly router = inject(Router);
	private readonly notificationService = inject(NotificationService);

	todo?: ITodo;

	ngOnInit(): void {
		const todoId = this.route.snapshot.paramMap.get("id");
		if (!todoId) {
			this.notificationService.showError("Invalid todo id");
			this.router.navigateByUrl("/todos");
			return;
		}

		const found = this.todoService.getTodo(todoId);
		if (!found) {
			this.notificationService.showError("Todo not found");
			this.router.navigateByUrl("/todos");
			return;
		}

		this.todo = found;
	}

	onFormSubmit(form: NgForm): void {
		if (form.invalid) {
			this.notificationService.showError("Please fix validation errors");
			return;
		}

		if (!this.todo) {
			return;
		}

		this.todoService.updateTodo(this.todo.id, form.value);
		this.router.navigateByUrl("/todos");
		this.notificationService.show("Todo updated successfully!");
	}
}
