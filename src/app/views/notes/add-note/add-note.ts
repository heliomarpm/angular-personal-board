import { Component, inject, signal } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";

import { NoteModel, NotesService } from "../shared";
import { NotificationService } from "@app/shared/components";

@Component({
	selector: "app-add-note",
	imports: [FormsModule, RouterLink],
	templateUrl: "./add-note.html",
	styleUrl: "./add-note.scss",
})
export class AddNote {
	private readonly router = inject(Router);
	private readonly notesService = inject(NotesService);
	private readonly notificationService = inject(NotificationService);

	protected showValidationErrors = signal(false);

	onFormSubmit(form: NgForm) {
		if (form.invalid) {
			this.showValidationErrors.set(true);
			return;
		}

		const note = new NoteModel(form.value.title, form.value.content);

		this.notesService.add(note);
		this.router.navigateByUrl("/notes");
		this.notificationService.success("✅ Created note!");
	}
}
