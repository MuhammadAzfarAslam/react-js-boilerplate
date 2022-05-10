import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import React from "react";
import { Route } from "react-router-dom";

function ProtectedRoute({ children }) {
  return (
      <>
      <Header />
      {children}
      <Footer />
      </>
  );
}
export default ProtectedRoute;
