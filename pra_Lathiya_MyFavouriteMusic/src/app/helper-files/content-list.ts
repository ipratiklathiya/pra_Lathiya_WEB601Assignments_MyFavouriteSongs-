// noinspection TypeScriptUnresolvedVariable

class ContentList {
  // @ts-ignore
  private readonly contents: Content[];
  items: any;

  constructor() {
    this.contents = [];
  }

  // @ts-ignore
  getContents(): Content[] {
    return this.contents;
  }

  // @ts-ignore
  add(content: Content) {
    this.contents.push(content);
  }

  length(): number {
    return this.contents.length;
  }

  getHtml(index: number): string {
    if (index < 0 || index >= this.items.length) {
      return '<p>Error: index out of range</p>';
    }
    const item = this.items[index];

    const content = this.contents[index];
    const title = content.title;
    const description = content.description;
    const creator = content.creator;
    const imgURL = content.imgURL;
    const type = content.type;
    let html = `<p>Title: ${title}</p><p>Description: ${description}</p><p>Creator: ${creator}</p>`;
    if (imgURL) {
      html += `<img src='${imgURL}' alt='${type}'>`;
    }
    if (type) {
      html += `<p>Type: ${type}</p>`;
    }
    return html;
  }
}
