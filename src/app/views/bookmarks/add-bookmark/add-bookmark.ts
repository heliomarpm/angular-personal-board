import { Component, inject } from "@angular/core";
import { FormsModule, type NgForm } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { NotificationService } from "@app/shared/components";
import { Utils } from "@heliomarpm/helpers";
import type { IBookmark } from "../shared";
import { BookmarkService } from "../shared/bookmark.service";

@Component({
	selector: "app-add-bookmark",
	imports: [FormsModule, RouterLink],
	templateUrl: "./add-bookmark.html",
	styleUrl: "./add-bookmark.scss",
})
export class AddBookmark {
	protected readonly router = inject(Router);
	protected readonly bookmarkService = inject(BookmarkService);
	protected readonly notificationService = inject(NotificationService);

	onFormSubmit(form: NgForm) {
		const { title, url } = form.value;

		const bookmark: IBookmark = {
			id: Utils.generateUUIDv4(),
			title,
			url,
			logo: null,
		};

		this.bookmarkService.addBookmark(bookmark);
		this.router.navigateByUrl("/bookmarks");
		this.notificationService.show("Created bookmark!");
	}
}
