import { NextRequest, NextResponse } from "next/server";
<<<<<<< HEAD
import mongoose from "mongoose";
=======
>>>>>>> 4c4f13f (here)
import Appointment from "@/app/model/appointmentModel";
import connectToDatabase from "@/app/libs/db";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
<<<<<<< HEAD
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
=======

    const { username, email, message } = await req.json();

    // ✅ Validate required fields
    if (!username || !email || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // ✅ Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
    }

    // ✅ Validate message length
    if (message.length < 10) {
      return NextResponse.json({ message: "Message must be at least 10 characters long" }, { status: 400 });
    }

    // ✅ Save to database
    const appointment = new Appointment({ username, email, message });
    await appointment.save();
    
    return NextResponse.json({ message: "Appointment created successfully" }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Error:", error.message);
    return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
>>>>>>> 4c4f13f (here)
  }
}
