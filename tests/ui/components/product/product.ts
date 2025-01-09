import { BaseComponent, IBaseComponent } from "../baseComponent";
import { ProductName } from "./productName";
import { ProductPrice } from "./productPrice";
import { ProductDescription } from "./productDescription";

/**
 * Product Component
 */

export class ProductComponent extends BaseComponent {
  public productName: ProductName;
  public productPrice: ProductPrice;
  public productDescription: ProductDescription;
  constructor(dataProps: IBaseComponent) {
    super(dataProps);
    this.productName = new ProductName({
      page: dataProps.page,
      selector: "//*[@class='name']",
    });
    this.productPrice = new ProductPrice({
      page: dataProps.page,
      selector: "//*[@class='price-container']",
    });
    this.productDescription = new ProductDescription({
      page: dataProps.page,
      selector: "//*[@class='description description-tabs']//p",
    });
  }
}
