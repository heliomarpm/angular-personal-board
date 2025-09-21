import type { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "#", pathMatch: "full" },
  { path: "404", loadComponent: () => import("./views/page-not-found/page-not-found").then((c) => c.PageNotFound) },
  {
    path: "bookmarks", loadComponent: () => import("./views/bookmarks/bookmarks").then((c) => c.Bookmarks),
    // data: { tab: 1 },
    // children: [
    // 	{ path: "add", loadComponent: () => import("./views/bookmarks/add-bookmark/add-bookmark").then((c) => c.AddBookmark) },
    // ],
  },
  { path: "bookmarks/add", loadComponent: () => import("./views/bookmarks/add-bookmark/add-bookmark").then((c) => c.AddBookmark) },
  { path: "**", redirectTo: "/404" },
];
