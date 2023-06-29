import { Customers } from "$lib/models/Customer";
import { Products } from "$lib/models/Product";
import { Purchased } from "$lib/models/Purchase";

export async function load() {
  try {
    const cusID = await Customers.findAll({
      attributes: ["CustomersID", "FirstName"],
    });
    const prodID = await Products.findAll({
      attributes: ["ProductsID", "ProductName", "Price"],
    });

    const dataCus = cusID.map((id) => id.toJSON());
    const dataProd = prodID.map((id) => id.toJSON());

    return {
      status: 200,
      dataCus,
      dataProd,
    };
  } catch (error) {
    console.error(error);
  }
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const CustomersID = data.get("CustomersID");
    const OrderDate = data.get("OrderDate");
    const TotalAmount = data.get("TotalAmount");

    const uploadedCustomer = Purchased.build({
      CustomersID,
      OrderDate,
      TotalAmount,
    });

    try {
      await uploadedCustomer.save();

      return {
        status: 200,
        body: {
          message: "Data was saved to Database!",
        },
      };
    } catch (error) {
      console.error(`Data wasn't saved to Database: ${error}`);

      return {
        status: 500,
        body: {
          message: "Internal server error",
        },
      };
    }
  },
};
