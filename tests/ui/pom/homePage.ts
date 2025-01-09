import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { CardComponent } from "../components/card/cardComponent";
import {RowComponent} from "../components/rowComponent";

/**
 *  Home page
 */
const URL = "https://www.demoblaze.com/";
export class HomePage extends BasePage {
  public card: CardComponent;
  public row: RowComponent

  constructor(page: Page) {
    super({ page, url: URL });
    this.card = new CardComponent({ page: page, selector: `//*[@class="card h-100]"` });
    this.row = new RowComponent({ page: page ,selector: `//*[@id="tbodyid"]` });
  }
}
