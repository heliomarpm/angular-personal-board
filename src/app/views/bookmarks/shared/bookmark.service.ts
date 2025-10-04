import { Injectable } from "@angular/core";
import { HybridWebCache, StorageEngine } from "hybrid-webcache";
import type { IBookmark } from ".";

@Injectable({
	providedIn: "root",
})
export class BookmarkService {
	protected readonly storage = new HybridWebCache("PERSONAL_BOARD", { ttl: 0, storage: StorageEngine.LocalStorage });

	bookmarks: IBookmark[] = [];

	constructor() {
		this.loadState();
	}

	getBookmarks(): IBookmark[] {
		return this.bookmarks;
	}

	getBookmark(id: string): IBookmark | undefined {
		return this.bookmarks.find((item) => item.id === id);
	}

	addBookmark(bookmark: IBookmark): void {
		this.bookmarks.push(bookmark);
		this.saveState();
	}

	updateBookmark(id: string, updatedFields: Partial<IBookmark>): void {
		const bookmark = this.getBookmark(id);

		if (bookmark) {
			Object.assign(bookmark, updatedFields);
			this.saveState();
		}
	}

	deleteBookmark(id: string): void {
		const index = this.bookmarks.findIndex((b) => b.id === id);

		if (index !== -1) {
			this.bookmarks.splice(index, 1);
			this.saveState();
		}
	}

	private saveState(): void {
		this.storage.setSync("bookmarks", this.bookmarks);
	}

	private loadState(): void {
		this.bookmarks = this.storage.getSync<IBookmark[]>("bookmarks")?.value || [];

		if (this.bookmarks.length === 0) {
			this.bookmarks = [
				{
					id: "1",
					title: "Personal Github",
					url: "https://github.com/heliomarpm",
					logo: "",
				},
				{
					id: "2",
					title: "NavToMe",
					url: "https://navto.me/heliomarpm",
					logo: "",
				},
			];
		}
	}
}
