import { Customers } from "$lib/models/Customer";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const FirstName = data.get("FirstName");
    const LastName = data.get("LastName");
    const Phone = data.get("Phone");

    const uploadedCustomer = Customers.build({
      FirstName,
      LastName,
      Phone,
    });

    try {
      await uploadedCustomer.save();
      console.log("Data was saved to Database!");

      return {
        status: 200,
        body: {
          message: "Data was saved successfully",
        },
      };
    } catch (error) {}
  },
};
