import { NextRequest, NextResponse } from "next/server";
import Appointment from "@/app/model/appointmentModel";
import connectToDatabase from "@/app/libs/db";

export async function GET( ) {
  try {
    await connectToDatabase();
    const appointments = await Appointment.find();
    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
