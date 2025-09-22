import { Component, inject } from "@angular/core";
import { FormsModule, type NgForm } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";

import type { IBookmark } from "../bookmark.model";
import { BookmarkService } from "../bookmark.service";

@Component({
	selector: "app-add-bookmark",
	imports: [FormsModule, RouterLink],
	templateUrl: "./add-bookmark.html",
	styleUrl: "./add-bookmark.scss",
})
export class AddBookmark {
	protected readonly bookmarkService = inject(BookmarkService);
	protected readonly router = inject(Router);

	onFormSubmit(form: NgForm) {
		const { name, url } = form.value;

		const bookmark: IBookmark = {
			id: crypto.randomUUID(),
			title: name,
			url,
			logo: null,
		};

		this.bookmarkService.addBookmark(bookmark);
		this.router.navigateByUrl("/bookmarks");
		// this.notificationService.show('Created bookmark!')
	}
}
