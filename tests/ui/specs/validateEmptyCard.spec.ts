import { expect, test } from "@playwright/test";
import { CardPage } from "../pom/cardPage";

/**
 * Empty test order message
 */
test("Empty place order", async ({ page }) => {
  const cardPage: CardPage = new CardPage(page);
  await test.step(`Open card page`, async () => {
    await cardPage.goto();
  });
  await test.step(`Click on the Place order`, async () => {
    await cardPage.placeOrderButton.click();
  });
  let dialogMessage = "";
  page.on("dialog", async (dialog) => {
    dialogMessage = dialog.message();
    await dialog.accept();
  });
  await test.step(`Click on purchase in Modal`, async () => {
    await cardPage.modal.footer.purchaseButton.click();
  });
  await test.step(`Validate dialog message`, async () => {
    expect(dialogMessage).toContain("Please fill out Name and Creditcard."); // Validate the message
  });
});
