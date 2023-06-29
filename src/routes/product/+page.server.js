import { Products } from "$lib/models/Product";

export async function load() {
  try {
    const products = await Products.findAll({
      order: [["createdAt", "ASC"]],
    });

    const data = products.map((product) => product.toJSON());

    return {
      status: 200,
      products: data,
    };
  } catch (error) {
    console.error(error);
  }
}
