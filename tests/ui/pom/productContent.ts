import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { RowComponent } from "../components/rowComponent";
import { ProductComponent } from "../components/product/product";
import {ImageComponent} from "../components/imageComponent";
import {ButtonComponent} from "../components/buttonComponent";

/**
 *  Home page
 */
const URL = "https://www.demoblaze.com/prod.html";
export class ProductContent extends BasePage {
  public row: RowComponent;
  public productImage: ImageComponent;
  public product: ProductComponent;
  public addToCartButton: ButtonComponent;
  constructor(page: Page) {
    super({ page, url: URL });
    this.row = new RowComponent({ page: page, selector: `//*[@id="tbodyid"]` });
    this.productImage = new ImageComponent({
      page: page,
      selector: `//*[@class="item active"]`,
    });
    this.product = new ProductComponent({
      page: page,
      selector: `//*[@id="tbodyid"]`,
    });
    this.addToCartButton = new ButtonComponent({
      page: page,
      selector: `//*[contains(@onclick,'addToCart')]`,
    });
  }
}
