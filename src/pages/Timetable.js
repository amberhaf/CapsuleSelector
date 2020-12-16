import React from "react";
import Header from "../components/HeaderTime&Assign.js";
import Footer from "../components/Footer.js";
import Dashboard from "./CalendarComponent";
{/*passes module true props into our calendar component so only modules will be shown*/}
const Timetable = () => (
  <div>
  <Header />
  <section className="page-section bg-primary">
  <div className="container color">
  <Dashboard module={true}/>
  </div>
   </section>
   <Footer />
   </div>
);

export default Timetable;