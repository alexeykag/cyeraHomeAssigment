import { expect, Locator, Page } from "@playwright/test";

/**
 * Base component constructor interface
 */
export interface IBaseComponent {
  page: Page;
  selector: string;
}
/**
 * Base class for an POM component class
 * such as buttons, dropList, etc
 */
export class BaseComponent {
  get locator(): Locator {
    return this._locator;
  }

  get props(): IBaseComponent {
    return this._props;
  }

  private readonly _locator: Locator;
  private readonly _props: IBaseComponent;

  constructor(basePageProps: IBaseComponent) {
    if (!basePageProps.selector) {
      throw Error(`Missing selector in basePageProps`);
    }
    const elementSelector: string = basePageProps.selector;

    this._props = basePageProps;
    this._locator = basePageProps.page.locator(elementSelector);
  }


  /**
   * click on the element
   */
  public async click(): Promise<void> {
    return this.locator.click();
  }
  /**
   * Wait for element's state
   * Default state ==  visible
   * @param options
   */
  public async waitFor(options?: {
    state?: "attached" | "detached" | "visible" | "hidden";
    timeout?: number;
  }): Promise<void> {
    return this.locator.waitFor(options);
  }

  /**
   * Ensures the [Locator] points to an element with given attribute.
   * @param attribute
   * @param value
   */
  public async expectAttribute(
    attribute: string,
    value: string,
  ): Promise<void> {
    await expect(this.locator).toHaveAttribute(attribute, value);
  }

  public async textContext(): Promise<string> {
    return this.locator.innerText();
  }
}
