import { Component, inject, type OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BookmarkService } from "./bookmark.service";
import { Bookmark, type BookmarkModel } from "./components";

@Component({
	selector: "app-bookmarks",
	imports: [Bookmark, RouterLink],
	templateUrl: "./bookmarks.html",
	styleUrl: "./bookmarks.scss",
})
export class Bookmarks implements OnInit {
	protected readonly bookmarkService = inject(BookmarkService);
	bookmarks: BookmarkModel[] = [];

	ngOnInit(): void {
		this.bookmarks = this.bookmarkService.getBookmarks();
	}
}
