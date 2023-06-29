import { Reports } from "../../lib/models/Report";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const reportDate = data.get("reportDate");
    const balance = data.get("balance");
    const sales = data.get("sales");
    const inventory = data.get("inventory");
    const salary = data.get("salary");

    const uploadedData = Reports.build({
      reportDate,
      balance,
      sales,
      inventory,
      salary,
    });

    try {
      await uploadedData.save();
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
