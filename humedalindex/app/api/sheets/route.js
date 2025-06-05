import { getSheetsData } from "../../helpers/sheets";

export async function GET() {
  try {
    const dataSheet = await getSheetsData(
      process.env.GOOGLE_SHEETS_ID,
      "raw_data!A2:K100"
    );
    
    return Response.json(dataSheet);
  } catch (error) {
    console.error("Error fetching sheets data:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}