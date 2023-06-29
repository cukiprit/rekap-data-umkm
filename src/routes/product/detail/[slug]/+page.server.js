import { Products } from "$lib/models/Product";

export async function load({ params }) {
  try {
    const product = await Products.findOne({
      where: { ProductsID: params.slug },
    });

    const data = product.toJSON();

    return {
      status: 200,
      product: [data],
    };
  } catch (error) {
    console.error(error);
  }
}
