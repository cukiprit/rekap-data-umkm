import { Products } from "$lib/models/Product";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const ProductName = data.get("ProductName");
    const Description = data.get("Description");
    const Price = data.get("Price");

    const uploadedProduct = Products.build({
      ProductName,
      Description,
      Price,
    });

    try {
      await uploadedProduct.save();
      console.log("Data was saved to Database!");

      return {
        status: 200,
        body: {
          message: "Data was saved successfully",
        },
      };
    } catch (error) {
      console.error(`Data wasn't saved to Database: ${error}`);

      return {
        status: 500,
        body: {
          message: "Internal server error. Data could not be saved",
        },
      };
    }
  },
};
