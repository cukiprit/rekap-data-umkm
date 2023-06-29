import { Customers } from "$lib/models/Customer";

export async function load() {
  try {
    const customers = await Customers.findAll({
      order: [["createdAt", "ASC"]],
    });

    const data = customers.map((customer) => customer.toJSON());

    return {
      status: 200,
      customers: data,
    };
  } catch (error) {
    console.error(error);
  }
}
