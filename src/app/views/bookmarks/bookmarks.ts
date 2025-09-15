import { Component, OnInit } from '@angular/core';
import { Bookmark, BookmarkModel } from './components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bookmarks',
  imports: [Bookmark, RouterLink, ],
  templateUrl: './bookmarks.html',
  styleUrl: './bookmarks.scss'
})
export class Bookmarks implements OnInit {
  bookmarks: BookmarkModel[] = [];

  ngOnInit(): void {
    this.bookmarks = [];
  }
}
