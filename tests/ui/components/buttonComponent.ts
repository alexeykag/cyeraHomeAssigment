import { BaseComponent, IBaseComponent } from "./baseComponent";

/**
 * Button component
 */
export class ButtonComponent extends BaseComponent {
  constructor(dataProps: IBaseComponent) {
    super(dataProps);
  }
  public async click(): Promise<void> {
    return await this.props.page.click(this.props.selector);
  }
}
