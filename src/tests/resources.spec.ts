import { test, expect } from "@playwright/test";

test.describe("Resources Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/resources");
  });

  test("should show the Resources heading", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toHaveText("Resources");
  });

  test("should show the description paragraph", async ({ page }) => {
    await expect(
      page.getByText(/Consectetur adipiscing elit duis tristique/i)
    ).toBeVisible();
  });

  test("should have search input with placeholder", async ({ page }) => {
    const input = page.locator(
      'input[placeholder="Search by title or keyword"]'
    );
    await expect(input).toBeVisible();
  });

  test("should allow typing in the search input", async ({ page }) => {
    const input = page.locator(
      'input[placeholder="Search by title or keyword"]'
    );
    await input.fill("React");
    await expect(input).toHaveValue("React");
  });
});
