import { expect, test } from "@playwright/test";
import { storeTest } from "../fixtures/storeTest";
import { catalog } from "../testData/catalog";

/**
 * Testing catalog, validation catalog details
 */
storeTest("Validate Catalog", async ({ homePage }) => {
  for (const product of catalog) {
    await test.step(`Validating catalog for product ${product.name}`, async () => {
      const card = (await homePage.card.getCardsName(product.name));
      await expect(card).toHaveText(product.name);
      const image = await homePage.card.getCardsImage(product.name);
      await image.expectAttribute("src", product.image);
      const price = await homePage.card.getCardsPrice(product.name);
      await expect(price).toHaveText(product.price);
    });
  }
});
