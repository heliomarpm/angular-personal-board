import { Component, input, output } from "@angular/core";

import type { TodoModel } from "../../todo.model";

@Component({
	selector: "app-todo",
	imports: [],
	templateUrl: "./todo.html",
	styleUrl: "./todo.scss",
})
export class Todo {
	todo = input.required<TodoModel>();

	editClick = output();
	deleteClick = output();
	// toggleCompleteClick = output();

	// get isCompleted(): boolean {
	// 	return this.todo().completed;
	// }

	onEdit(): void {
		this.editClick.emit();
	}
	onDelete(): void {
		this.deleteClick.emit();
	}
	// onToggleCompleted(): void {
	// 	this.todo().completed = !this.todo().completed;
	// 	this.toggleCompleteClick.emit();
	// }
}
