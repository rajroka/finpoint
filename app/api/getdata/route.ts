import { NextRequest, NextResponse } from "next/server";
import Appointment from "@/app/model/appointmentModel";

export  default async function GET( ) {
  try {
    
    const appointments = await Appointment.find();
    return NextResponse.json({ appointments }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
