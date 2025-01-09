import {BaseComponent, IBaseComponent} from "./baseComponent";

/**
 * Image component
 */
export class ImageComponent extends BaseComponent {
  constructor(dataProps: IBaseComponent) {
    super(dataProps);
  }
  public async click(): Promise<void> {
    return await this.props.page.click(this.props.selector);
  }
}
