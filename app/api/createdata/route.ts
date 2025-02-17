import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Appointment from "@/app/model/appointmentModel";
import connectToDatabase from "@/app/libs/db";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const appointment = new Appointment({ fullName, email, message });
    await appointment.save();
    return NextResponse.json(
      { message: "Appointment created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
