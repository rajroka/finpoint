"use client";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

interface Appointment {
  _id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
}

const AppointmentTable: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null); // Track the loading state for specific appointment

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/getdata");
      const result = await response.json();
      setAppointments(result.appointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (id: string) => {
    setLoadingId(id); // Set the loading state for this appointment

    try {
      const response = await fetch(`/api/deletedata/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // Remove the deleted appointment from the state
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment._id !== id)
        );
      } else {
        console.error("Error deleting appointment:", response.statusText);
      }
      setLoadingId(null); // Reset loading state after deletion
    } catch (error) {
      console.error("Error deleting appointment:", error);
      setLoadingId(null); // Reset loading state on error
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Appointment Table
      </h1>
      <div className="overflow-hidden shadow-xl rounded-lg">
        <table className="min-w-full bg-white table-auto border-collapse">
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="py-3 px-6 text-sm font-semibold text-left">ID</th>
              <th className="py-3 px-6 text-sm font-semibold text-left">
                Full Name
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-left">
                Email
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-left">
                Message
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-left">
                Created At
              </th>
              <th className="py-3 px-6 text-sm font-semibold text-left">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={appointment._id}
                className={`border-b hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-6 text-sm text-gray-900">
                  {appointment._id}
                </td>
                <td className="py-3 px-6 text-sm text-gray-900">
                  {appointment.fullName}
                </td>
                <td className="py-3 px-6 text-sm text-gray-900">
                  {appointment.email}
                </td>
                <td className="py-3 px-6 text-sm text-gray-900">
                  {appointment.message}
                </td>
                <td className="py-3 px-6 text-sm text-gray-900">
                  {new Date(appointment.createdAt).toLocaleString()}
                </td>
                <td className="py-3 px-6 text-sm text-gray-900 text-center">
                  <button
                    onClick={() => handleDelete(appointment._id)}
                    className="text-red-600 hover:text-red-800"
                    disabled={loadingId === appointment._id}
                  >
                    {loadingId === appointment._id ? (
                      <ClipLoader color="red" size={15} />
                    ) : (
                      <FaTrash />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
