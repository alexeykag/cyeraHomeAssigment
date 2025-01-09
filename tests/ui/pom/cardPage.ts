import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { ButtonComponent } from "../components/buttonComponent";
import {ModalComponent} from "../components/modal/modalComponent";

/**
 *  Home page
 */
const URL = "https://www.demoblaze.com/cart.html#";
export class CardPage extends BasePage {
  public placeOrderButton: ButtonComponent;
  public modal: ModalComponent;
  constructor(page: Page) {
    super({ page, url: URL });
    this.placeOrderButton = new ButtonComponent({
      page: page,
      selector: `//button[contains(@data-target, "orderModal")]`,
    });
    this.modal = new ModalComponent({page: page, selector: `//*[@class='modal-content']` });

  }
}
