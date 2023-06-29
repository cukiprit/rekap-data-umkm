import { Products } from "$lib/models/Product";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
  const product = await Products.findOne({
    where: { ProductsID: params.slug },
  });

  if (product === null) {
    throw redirect(301, "/product");
  }

  try {
    const data = product.toJSON();

    return {
      status: 200,
      product: [data],
    };
  } catch (error) {
    console.error(error);
  }
}

export const actions = {
  delete: async ({ params }) => {
    try {
      await Products.destroy({
        where: { ProductsID: params.slug },
      });
      // goto("/product");
    } catch (error) {
      console.error("Error Deleted The Data!");
      // goto(`/product/edit/${params.slug}`);
    }
    throw redirect(301, "/product");
  },
};
