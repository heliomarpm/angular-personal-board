export class BookmarkModel {
  id: string
  title: string
  url: string
  logo: string | null;

  constructor(url: string, title?: string, logo?: string) {
    this.id = crypto.randomUUID()
    this.url = url;

    this.title = title ? title : (new URL(url)).hostname
    this.logo = logo ? logo : null;
  }
}