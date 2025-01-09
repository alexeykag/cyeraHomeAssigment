import { Page, test } from "@playwright/test";
import { HomePage } from "../pom/homePage";

export const storeTest = test.extend<{ homePage: HomePage; page: Page }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.row.waitFor();

    await use(homePage);
  },
});
