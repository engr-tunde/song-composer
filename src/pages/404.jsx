import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";

const NotFound = () => {
  return (
    <>
      <Head pageTitle="Page Not Found" />
      <div className="h-[80vh] py-[60px] md:py-[100px] px-7 w-[100vw] flex flex-col items-center justify-center">
        <p>
          The page you are trying to visit does not exist on this app. Looks
          like you got here by a mistake.
        </p>

        <Link
          to="/"
          style={{
            fontWeight: "700",
          }}
        >
          Go back to the homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
