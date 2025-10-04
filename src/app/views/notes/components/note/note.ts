import { Component, input } from "@angular/core";
import { NoteModel } from "../../shared";

@Component({
	selector: "app-note",
	imports: [],
	templateUrl: "./note.html",
	styleUrl: "./note.scss",
})
export class Note {
	note = input.required<NoteModel>();
}
