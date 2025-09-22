import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { BookmarkService } from "../bookmark.service";

@Component({
	selector: "app-manage-bookmarks",
	imports: [RouterLink, RouterLinkActive],
	templateUrl: "./manage-bookmarks.html",
	styleUrl: "./manage-bookmarks.scss",
})
export class ManageBookmarks {
	protected readonly bookmarkService = inject(BookmarkService);
	bookmarks = this.bookmarkService.getBookmarks();
}
