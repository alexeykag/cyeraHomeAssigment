import { expect, test } from "@playwright/test";
import { storeTest } from "../fixtures/storeTest";
import { catalog } from "../testData/catalog";
import { ProductContent } from "../pom/productContent";

/**
 * Validate Product Details description, price and name
 */
for (const product of catalog) {
  storeTest(
    `Validate product details for ${product.name}`,
    async ({ homePage, page }) => {
      const productContent = new ProductContent(page);
      await test.step(`Click on the product ${product.name}`, async () => {
        const image = await homePage.card.getCardsImage(product.name);
        await image.click();
      });
      await test.step(`Validate description for product ${product.name}`, async () => {
        const description = (
          await productContent.product.productDescription.textContext()
        ).replace(/\n/g, "");
        expect(description).toBe(product.description);
      });
      await test.step(`Validate price for product ${product.name}`, async () => {
        const description =
          await productContent.product.productPrice.textContext();
        expect(description).toContain(product.price);
      });
      await test.step(`Validate name for product ${product.name}`, async () => {
        const description = (
          await productContent.product.productName.textContext()
        ).replace(/\n/g, "");
        expect(description).toBe(product.name.replace(/\n/g, ""));
      });
    },
  );
}
