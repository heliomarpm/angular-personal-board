import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BookmarkService } from "./bookmark.service";
import { Bookmark } from "./components";

@Component({
	selector: "app-bookmarks",
	imports: [Bookmark, RouterLink],
	templateUrl: "./bookmarks.html",
	styleUrl: "./bookmarks.scss",
})
export class Bookmarks {
	protected readonly bookmarkService = inject(BookmarkService);
	bookmarks = this.bookmarkService.getBookmarks();
}
