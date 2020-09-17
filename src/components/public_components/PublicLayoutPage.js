import React from "react";
import { Redirect } from "react-router-dom";
import PublicNavbar from "./Navbar/PublicNavbar";
import PublicFooter from "./Footer/PublicFooter";
import "../../helpers/css/public-layout-page.css";

function PublicLayoutPage(WrappedComponent) {
  return function (props) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      if (token.userType === "I") {
        return <Redirect to="/instructor" />;
      } else if (token.userType === "S") {
        return <Redirect to="/student" />;
      }
    }
    localStorage.clear("token");
    return (
      <React.Fragment>
        <PublicNavbar />
        <div className="public-layout-page-container">
          <WrappedComponent {...props} />
        </div>
        <PublicFooter />
      </React.Fragment>
    );
  };
}

export default PublicLayoutPage;
