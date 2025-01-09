import { CardBlockComponent } from "./cardBlock";
import { BaseComponent, IBaseComponent } from "../baseComponent";
import { Locator } from "@playwright/test";
import {ImageComponent} from "../imageComponent";

/**
 * Card component
 */
const CARD_TITLE_SELECTOR = "//*[@class='card-title']";
const CARD_BLOCK_SELECTOR = "//*[@class='card-block']";
const IMAGE_SELECTOR = "//*[@class='card-img-top img-fluid']";
export class CardComponent extends BaseComponent {
  public cardImage: ImageComponent;
  public cardBlock: CardBlockComponent;

  constructor(dataProps: IBaseComponent) {
    super(dataProps);
    this.cardBlock = new CardBlockComponent({
      page: dataProps.page,
      selector: CARD_BLOCK_SELECTOR,
    });
    this.cardImage = new ImageComponent({
      page: dataProps.page,
      selector: IMAGE_SELECTOR,
    });
  }

  /**
   * Getting Card by name
   * @param name of the card. For example Samsung galaxy s6
   */
  public async getCardByName(name: string): Promise<Locator> {
    return this.props.page.locator(
      `//*[@class="card h-100" and descendant-or-self::*[text()="${name}"]]`,
    );
  }

  public async getCardsName(cardName: string) {
    const selector = `//*[@class="card h-100" and descendant-or-self::*[text()="${cardName}"]]${CARD_TITLE_SELECTOR}`;
    return this.props.page.locator(selector);
  }

  public async getCardsImage(cardName: string) {
    const selector = `//*[@class="card h-100" and descendant-or-self::*[text()="${cardName}"]]${IMAGE_SELECTOR}`;
    return new ImageComponent({ page: this.props.page, selector: selector });
  }

  public async getCardsPrice(cardName: string) {
    const selector = `//*[@class="card h-100" and descendant-or-self::*[text()="${cardName}"]]${CARD_BLOCK_SELECTOR}//h5`;
    return this.props.page.locator(selector);
  }
}
