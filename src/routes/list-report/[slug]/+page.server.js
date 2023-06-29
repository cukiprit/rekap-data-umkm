import { Reports } from "../../../lib/models/Report";

export async function load({ params }) {
  try {
    const reports = await Reports.findOne({
      where: { reportId: params.slug },
    });

    // if (reports === null) {
    //   return {
    //     status: 404,
    //     message: "Data not found",
    //   };
    // }

    const data = reports.toJSON();

    return {
      status: 200,
      reports: [data],
    };
  } catch (error) {
    console.error(error);
  }
}

export const actions = {
  delete: async () => {},
  update: async ({ request, params }) => {
    const data = await request.formData();
    const reportDate = data.get("reportDate");
    const balance = data.get("balance");
    const sales = data.get("sales");
    const inventory = data.get("inventory");
    const salary = data.get("salary");

    const updatedData = Reports.update({
      reportDate,
      balance,
      sales,
      inventory,
      salary,
    });

    try {
      await updatedData.save();
      console.log("Data was updated to Database!");

      return {
        status: 200,
        body: {
          message: "Data was updated successfully",
        },
      };
    } catch (error) {
      console.error(`Data wasn't updated to Database: ${error}`);

      return {
        status: 500,
        body: {
          message: "Internal server error. Data could not be updated",
        },
      };
    }
  },
};
