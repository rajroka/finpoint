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
<<<<<<< HEAD
  const [loadingId, setLoadingId] = useState<string | null>(null); // Track the loading state for specific appointment
=======
  const [loadingId, setLoadingId] = useState<string | null>(null);
>>>>>>> 4c4f13f (here)

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/getdata");
      const result = await response.json();
<<<<<<< HEAD
      setAppointments(result.appointments);
=======

      if (!Array.isArray(result)) {
        console.error("Invalid response format", result);
        return;
      }

      setAppointments(result); // Directly set the array
>>>>>>> 4c4f13f (here)
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleDelete = async (id: string) => {
<<<<<<< HEAD
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
=======
    setLoadingId(id);

    try {
      const response = await fetch(`/api/deletedata?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAppointments((prev) => prev.filter((a) => a._id !== id));
      } else {
        console.error("Error deleting:", await response.text());
      }
    } catch (error) {
      console.error("Delete request failed:", error);
    }

    setLoadingId(null);
>>>>>>> 4c4f13f (here)
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Appointment Table
      </h1>
      <div className="overflow-hidden shadow-xl rounded-lg">
<<<<<<< HEAD
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
=======
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-purple-900 text-white">
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">Full Name</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Message</th>
              <th className="py-3 px-6">Created At</th>
              <th className="py-3 px-6">Actions</th>
>>>>>>> 4c4f13f (here)
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
<<<<<<< HEAD
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
=======
              <tr key={appointment._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="py-3 px-6">{appointment._id}</td>
                <td className="py-3 px-6">{appointment.fullName}</td>
                <td className="py-3 px-6">{appointment.email}</td>
                <td className="py-3 px-6">{appointment.message}</td>
                <td className="py-3 px-6">{new Date(appointment.createdAt).toLocaleString()}</td>
                <td className="py-3 px-6 text-center">
>>>>>>> 4c4f13f (here)
                  <button
                    onClick={() => handleDelete(appointment._id)}
                    className="text-red-600 hover:text-red-800"
                    disabled={loadingId === appointment._id}
                  >
<<<<<<< HEAD
                    {loadingId === appointment._id ? (
                      <ClipLoader color="red" size={15} />
                    ) : (
                      <FaTrash />
                    )}
=======
                    {loadingId === appointment._id ? <ClipLoader color="red" size={15} /> : <FaTrash />}
>>>>>>> 4c4f13f (here)
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
