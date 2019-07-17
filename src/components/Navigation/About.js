import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="about-header f1-l fw2 white-90 mb0 lh-title">
        Face Analysis App
      </h1>
      <p className="about navy mt2">
        {
          "Upload photo of any person and this app will analyze it and return information on age, gender, and multicultural appearance for detected face based on facial characteristics."
        }
      </p>
      <p className="about navy mt2">
        {
          "Sign up with any email address or log in with email: 'test@example.com' and password: 'test'."
        }
      </p>
    </div>
  );
};

export default About;
