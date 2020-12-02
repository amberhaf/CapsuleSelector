import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const Resources = () => (
  <div>
  <Header />
<section className="page-section bg-primary">
<div className="container">
    <h2 className="text-center">Resources</h2>
    <div className="row">
        <div className="col text-center">
            <div className="mt-5">
            <Link to="/Map"><img  className = "Mapbut" type="image" src="../Image/002-map.png" alt="Map"/></Link>
                <h3 className="h4 mb-2">Map</h3>
            </div>
        </div>
        <div className="col text-center">
            <div className="mt-5">
            <a target="_blank1" href="https://able.moodle.maynoothuniversity.ie/login/index.php"><img className="Moodlebut" type="image" src="../Image/moodle.png" alt="Moodle"/></a>             <h3 className="h4 mb-2">Moodle</h3>
            </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
            <div className="mt-5">
            <a target="_blank2" href="https://www.maynoothuniversity.ie/library"><img className = "Librarybut" type="image" src="../Image/019-cloud library.png" alt="Library"/></a>
                <h3 className="h4 mb-2">Library</h3>
            </div>
        </div>
        <div className="col text-center">
            <div className="mt-5">
            <a target="_blank3" href="https://www.maynoothuniversity.ie/coronavirus"><img className = "Coronabut" type="image" src="../Image/soap.png" alt="Corona Info"/></a>
                <h3 className="h4 mb-2">Covid-19 information</h3>
            </div>
        </div>
    </div>
    </div>
  </section>
  <Footer />
  </div>
);

export default Resources;