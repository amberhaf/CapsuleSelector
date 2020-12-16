import React from "react";
import Header from "../components/HeaderTime&Assign";
import Footer from "../components/Footer";
import CalendarComponent from "./CalendarComponent";
{/*passes module false props into our calendar component so modules won't be shown*/}
const Deadlines = () => (
  <div>
  <Header />
  <section className="page-section bg-primary">
  <div className="container color">
  <CalendarComponent module={false}/>
  </div>
   </section>
   <Footer />
   </div>
);

export default Deadlines;