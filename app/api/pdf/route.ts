import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request: NextRequest) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.emulateMediaType("screen");
    const pdfBuffer = await page.pdf({ format: "A4" });
    NextResponse.json(
      {
        pdf: pdfBuffer,
      },
      {
        status: 200,
      }
    );
    await browser.close();
  } catch (err) {
    let message = "Unknown error";
    if (err instanceof Error) {
      message = err.message;
    }
    return NextResponse.json(
      {
        error: message,
      },
      {
        status: 400,
      }
    );
  }
}
