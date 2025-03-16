import { Analytics } from '@vercel/analytics/react';
import React from "react";
import StudentData from "./components/StudentData";

function App() {
  return (
    <div>
      {/* <h1 style={{ textAlign: "center" }}>CampusFlow - Student Data Lookup</h1> */}
      <StudentData />
      <Analytics />

    </div>
  );
}

export default App;
