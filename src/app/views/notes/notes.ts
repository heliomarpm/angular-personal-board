import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import { NotesService } from "./shared";
import { Note } from "./components/note/note";

@Component({
	selector: "app-notes",
	imports: [Note, RouterLink],
	templateUrl: "./notes.html",
	styleUrl: "./notes.scss",
})
export class Notes {
	protected readonly notesService = inject(NotesService);
	protected readonly router = inject(Router);

	notes = this.notesService.notes;
}
