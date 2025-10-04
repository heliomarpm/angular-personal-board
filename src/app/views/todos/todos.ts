import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
// import { trigger, transition, style, animate } from '@angular/animations';

import { type ITodo, Todo, TodosService } from "./shared";

@Component({
	selector: "app-todos",
	imports: [Todo, RouterLink],
	templateUrl: "./todos.html",
	styleUrl: "./todos.scss",
	// animations: [
	// 	trigger('todoItemAnim', [
	// 		transition(':leave', [
	// 			animate(200, style({
	// 				opacity: 0,
	// 				height: 0,
	// 				marginBottom: 0
	// 			}))
	// 		])
	// 	])
	// ]
})
export class Todos {
	protected readonly todoService = inject(TodosService);
	protected readonly router = inject(Router);

	todos = this.todoService.todos;

	toggleCompleted(todo: ITodo) {
		this.todoService.updateTodo(todo.id, { completed: !todo.completed });
	}

	onEditClick(todo: ITodo) {
		this.router.navigate(["/todos", todo.id]);
	}

	onDeleteClick(todo: ITodo) {
		this.todoService.deleteTodo(todo.id);
	}

	trackById(_index: number, item: ITodo) {
		return item.id;
	}
}
