import { Component, inject, type OnInit } from "@angular/core";
import { FormsModule, type NgForm } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

import type { IBookmark } from "../bookmark.model";
import { BookmarkService } from "../bookmark.service";
import { NotificationService } from "@app/shared/components";

@Component({
	selector: "app-edit-bookmark",
	imports: [FormsModule, RouterLink],
	templateUrl: "./edit-bookmark.html",
	styleUrl: "./edit-bookmark.scss",
})
export class EditBookmark implements OnInit {
	bookmark: IBookmark = {} as IBookmark;

	protected readonly router = inject(Router);
	protected readonly route = inject(ActivatedRoute);
	protected readonly bookmarkService = inject(BookmarkService);
	protected readonly notificationService = inject(NotificationService);

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			const id = params.get("id");
			if (id) {
				const bookmark = this.bookmarkService.getBookmark(id);
				if (bookmark) {
					this.bookmark = { ...bookmark };
				} else {
					// If bookmark not found, navigate back to manage bookmarks
					this.router.navigate(["/bookmarks/manage"]);
				}
			}
		});
	}

	onFormSubmit(form: NgForm) {
		const { title, url } = form.value;

		this.bookmarkService.updateBookmark(this.bookmark.id, { title, url });
		this.notificationService.show("Updated bookmark!");
	}

	delete() {
		this.bookmarkService.deleteBookmark(this.bookmark.id);
		this.router.navigate(["../"], { relativeTo: this.route });
		this.notificationService.show("Deleted bookmark!");
	}
}
