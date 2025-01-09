import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";
let createdCartItemIds: string[] = [];

async function deleteCreatedCartItems(request: any) {
    for (const cartItemId of createdCartItemIds) {
        await request.delete(`${BASE_URL}/cart/${cartItemId}`);
    }
    createdCartItemIds = [];
}
test.describe("Mock API Tests", () => {
    test.afterEach(async ({ request }) => {
        await deleteCreatedCartItems(request);
    });
  test("GET /products - Should return 200 with a list of products", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/products`);
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
  });

  test("GET /cart - Should return 200 with a list of cart items", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/cart`);
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
  });

  test("GET /products/:id - Should return 200 with the correct product", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/products/1`);
    expect(response.status()).toBe(200);

    const data = await response.json();
    expect(data).toMatchObject({
      id: "1",
      name: "Samsung galaxy s6",
      price: 360,
      description: expect.any(String),
      stock: 1000,
    });
  });

  test("GET /products/:id - Should return 404 for an invalid product ID", async ({
    request,
  }) => {
    const response = await request.get(`${BASE_URL}/products/999`);
    expect(response.status()).toBe(404);
  });

  test("POST /cart - Should add a product to the cart", async ({ request }) => {
    const response = await request.post(`${BASE_URL}/cart`, {
      data: { productId: 1, quantity: 5 },
    });
    expect(response.status()).toBe(201);

    const data = await response.json();
    expect(data).toMatchObject({
      productId: 1,
      quantity: 5,
    });

  });


  test("DELETE /cart/:id - Should remove a product from the cart", async ({
    request,
  }) => {
      await request.post(`${BASE_URL}/cart`, {
          data: { id:"cf71", productId: 1, quantity: 5 },
      });
    const deleteResponse = await request.delete(`${BASE_URL}/cart/cf71`);
    expect(deleteResponse.status()).toBe(200);

    const data = await deleteResponse.json();
    expect(data).toEqual({"id": "cf71", "productId": 1, "quantity": 5});
  });

});
