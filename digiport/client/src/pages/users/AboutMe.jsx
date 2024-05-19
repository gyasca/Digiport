import React from "react";

function AboutMe() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const leftSectionStyle = {
    flex: 1,
    marginRight: "20px",
    /* Add any other styles you need for the left section */
  };

  const rightSectionStyle = {
    flex: 2,
    /* Add any other styles you need for the right section */
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}>
        {/* Placeholder for profile picture */}
      </div>
      
      <div style={rightSectionStyle}>
        <h1>Gregory</h1>
        
        <h2>A Bit About Me</h2>
        <p>
          I am a young Information Technology graduate from Nanyang Polytechnic,
          equipped with a strong foundation in software design and development,
          and a passion for software development.
        </p>

        {/* Buttons for Resume, Projects, Contact */}
        <button>Resume</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default AboutMe;
