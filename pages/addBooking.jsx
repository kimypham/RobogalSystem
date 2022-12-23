/*
Functionalities and Design of the Calendar Page
 */
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuth } from "../authentication/AuthContext";
import AddDateComp from "../components/AddBookingComp/AddDateComp";
import PageTitleComp from "../components/PageTitleComp";
import AddTimeComp from "../components/AddBookingComp/AddTimeComp";

function AddBooking() {
  // Basic authentication check
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    router.push("login");
  }

  // Functionalities
  const [date, setDate] = useState(null);
  const [datePicked, setDatePicked] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  return (
    <div className="flex flex-col">
      {/* Page title */}
      <div>
        <PageTitleComp />
      </div>

      {/* Adding Components */}
      <div className="grid grid-cols-3 gap-5">
        {/* Date Component */}
        <div className="max-w-fit">
          <AddDateComp
            date={date}
            setDate={setDate}
            setDatePicked={setDatePicked}
          />
          <div className="text-center">
            The picked date is {date ? date.toDateString() : "No Date"}
          </div>
        </div>

        {/* Time Component */}
        {date && datePicked ? (
          <AddTimeComp
            startTime={startTime}
            endTime={endTime}
            setStartTime={setStartTime}
            setEndTime={setEndTime}
          />
        ) : null}

        {startTime && endTime ? <div></div> : null}
      </div>
    </div>
  );
}

export default AddBooking;
