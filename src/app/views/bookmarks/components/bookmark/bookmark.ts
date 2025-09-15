import { HttpClient } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { BookmarkModel } from '../bookmark.model';

@Component({
  selector: 'app-bookmark',
  imports: [],
  templateUrl: './bookmark.html',
  styleUrl: './bookmark.scss'
})
export class Bookmark {
  item = input.required<BookmarkModel>();

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    if (!this.item().logo || this.item().logo!.length === 0) {
      this.item().logo = await this.getFavicon(this.item().url);
    }
  }

  async getFavicon(linkUrl: string): Promise<string> {
    return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${linkUrl}&size=48`;
  }
}
