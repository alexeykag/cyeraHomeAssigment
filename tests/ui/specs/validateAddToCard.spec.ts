import { expect, test } from "@playwright/test";
import { storeTest } from "../fixtures/storeTest";
import { catalog } from "../testData/catalog";
import { ProductContent } from "../pom/productContent";

/**
 * Validate add to card button functionality.
 */
for (const product of catalog) {
  storeTest(
    `Validate add to card button functionality for ${product.name}`,
    async ({ homePage, page }) => {
      const productContent = new ProductContent(page);
      await test.step(`Click on the product ${product.name}`, async () => {
        const image = await homePage.card.getCardsImage(product.name);
        await image.click();
      });
      let dialogMessage = "";
      page.on("dialog", async (dialog) => {
        dialogMessage = dialog.message();
        await dialog.accept();
      });
      await test.step(`Click on the add to card button for  ${product.name}`, async () => {
        await productContent.addToCartButton.click();
      });
      await test.step(`Validate dialog message`, async () => {
        await page.waitForEvent("dialog");
        expect(dialogMessage).toContain("Product added");
      });
    },
  );
}
