import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/UserContext";
import { useQuery } from "@tanstack/react-query";
import "./MyAppointment.css";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);

  return (
    <div className="my-10">
      <h2 className="text-3xl text-center mb-4">
        My <strong className="text-primary font-bold">Appointment</strong>
      </h2>
      <table className="w-full border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th>ID</th>
            <th>SERVICE</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>FEE</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings?.length === 0 ? (
            <div className="text-center text-2xl">You have no booking</div>
          ) : (
            bookings?.map((booking, i) => console.log(booking))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;