import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

class PageFixture {
    private _page!: Page;
    private _LoginPage!: LoginPage;

    // Getter for the base page
    get page(): Page {
        return this._page;
    }

    // Setter for the base page
    set page(page: Page) {
        this._page = page;
        this._LoginPage = new LoginPage(page);
    }

    // Getter for the BookCart page
    get loginpage(): LoginPage {
        return this._LoginPage;
    }
}

export const pageFixture = new PageFixture();