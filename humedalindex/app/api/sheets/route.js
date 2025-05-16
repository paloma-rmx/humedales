import { getSheetsData } from "@/app/helpers/sheets";
import { NextResponse } from "next/server";


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const spreadsheetId = searchParams.get("spreadsheetId");
    const range = searchParams.get("range") || "raw_data!A2:J39";

    const data = await getSheetsData(spreadsheetId, range);

    console.log("data", data);

    return NextResponse.json({
      status: 200,
      message: "Data fetched successfully",
      data: data.data.values,
    });
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    return NextResponse.json({
      status: 500,
      message: "Error fetching data",
      error: error.message,
    });
  }
}