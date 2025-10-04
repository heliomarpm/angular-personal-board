import { Utils } from "@heliomarpm/helpers";
export interface ITodo {
	id: string;
	text: string;
	completed: boolean;
}
export class TodoModel implements ITodo {
	id: string;
	text: string;
	completed: boolean;

	constructor(text: string, completed = false) {
		this.id = Utils.generateUUIDv4();
		this.text = text;
		this.completed = completed;
	}
}
