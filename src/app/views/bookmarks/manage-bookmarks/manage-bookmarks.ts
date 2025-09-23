import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { BookmarkService } from "../bookmark.service";

@Component({
	selector: "app-manage-bookmarks",
	imports: [RouterLink, RouterLinkActive, RouterOutlet],
	templateUrl: "./manage-bookmarks.html",
	styleUrl: "./manage-bookmarks.scss",
})
export class ManageBookmarks {
	protected readonly bookmarkService = inject(BookmarkService);
	bookmarks = this.bookmarkService.getBookmarks();
}
