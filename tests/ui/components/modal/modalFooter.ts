import { BaseComponent, IBaseComponent } from "../baseComponent";
import { ButtonComponent } from "../buttonComponent";
/**
 * Modal Footer
 */

export class ModalFooterComponent extends BaseComponent {
  public purchaseButton: ButtonComponent;
  constructor(dataProps: IBaseComponent) {
    super(dataProps);
    this.purchaseButton = new ButtonComponent({
      page: dataProps.page,
      selector: "//*[contains(@onclick,'purchaseOrder')]",
    });
  }
}
