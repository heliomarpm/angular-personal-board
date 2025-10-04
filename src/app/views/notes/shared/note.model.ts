import { Utils } from "@heliomarpm/helpers";

export interface INote {
	id: string;
	title: string;
	content?: string;
}

export class NoteModel implements INote {
	id: string;
	title: string;
	content?: string;

	constructor(title: string, content?: string) {
		this.id = Utils.generateUUIDv4();

		this.title = title;
		if (content) this.content = content;
	}
}
