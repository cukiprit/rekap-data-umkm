import { Reports } from "$lib/models/Report";

export async function load() {
  try {
    const reports = await Reports.findAll({
      order: [["reportDate", "DESC"]],
      limit: 5,
    });
    const data = reports.map((report) => report.toJSON());

    return {
      status: 200,
      reports: data,
    };
  } catch (error) {
    console.error(error);
  }
}
