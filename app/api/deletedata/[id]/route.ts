import { NextRequest, NextResponse } from "next/server";
import Appointment from "@/app/model/appointmentModel";


export async function DELETE(req: NextRequest) {
  try {
    const { pathname } = new URL(req.url);
    const appointmentId = pathname.split("/").pop();

    console.log(appointmentId);
    
    const deletedAppointment = await Appointment.findByIdAndDelete(
      appointmentId
    );
    return NextResponse.json({ deletedAppointment }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
