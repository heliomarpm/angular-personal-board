import { Component, input } from "@angular/core";
import type { BookmarkModel } from "../bookmark.model";

@Component({
	selector: "app-bookmark",
	imports: [],
	templateUrl: "./bookmark.html",
	styleUrl: "./bookmark.scss",
})
export class Bookmark {
	item = input.required<BookmarkModel>();

	ngOnInit() {
		if (!this.item().logo || this.item().logo?.length === 0) {
			this.item().logo = Bookmark.getFavicon(this.item().url);
		}
	}

	private static getFavicon(linkUrl: string): string {
		return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${linkUrl}&size=48`;
	}
}
