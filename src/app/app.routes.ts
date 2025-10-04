import type { Routes } from "@angular/router";

export const routes: Routes = [
	{ path: "", redirectTo: "#", pathMatch: "full" },
	{ path: "404", loadComponent: () => import("./views/page-not-found/page-not-found").then((c) => c.PageNotFound) },
	{
		path: "bookmarks",
		// data: { tab: 1 },
		children: [
			{ path: "", loadComponent: () => import("./views/bookmarks/bookmarks").then((c) => c.Bookmarks) },
			{ path: "add", loadComponent: () => import("./views/bookmarks/add-bookmark/add-bookmark").then((c) => c.AddBookmark) },
			{
				path: "manage",
				loadComponent: () => import("./views/bookmarks/manage-bookmarks/manage-bookmarks").then((c) => c.ManageBookmarks),
				children: [{ path: ":id", loadComponent: () => import("./views/bookmarks/edit-bookmark/edit-bookmark").then((c) => c.EditBookmark) }],
			},
		],
	},
	{
		path: "todos",
		// data: { tab: 2 },
		children: [
			{ path: "", loadComponent: () => import("./views/todos/todos").then((c) => c.Todos) },
			{ path: "add", loadComponent: () => import("./views/todos/add-todo/add-todo").then((c) => c.AddTodo) }
		],
	},

	// { path: "bookmarks/add", loadComponent: () => import("./views/bookmarks/add-bookmark/add-bookmark").then((c) => c.AddBookmark) },
	// {
	// 	path: "bookmarks/manage",
	// 	loadComponent: () => import("./views/bookmarks/manage-bookmarks/manage-bookmarks").then((c) => c.ManageBookmarks),
	// 	children: [{ path: ":id", loadComponent: () => import("./views/bookmarks/edit-bookmark/edit-bookmark").then((c) => c.EditBookmark) }],
	// },
	{ path: "**", redirectTo: "/404" },
];
