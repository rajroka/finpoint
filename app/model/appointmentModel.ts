import mongoose, { Schema, Document } from "mongoose";

interface IAppointment extends Document {
  fullName: string;
  email: string;
  message: string;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;
