import React, { useEffect } from "react";
import "./index.scss";

// Importing TagCloud package
import TagCloud from "TagCloud";

const Sphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "CN",
        "DBMS",
        "OS",
        "Data Structures",
        "Algorithms",
        "Java",
        "Python",
        "Django",
        "MySQL",
        "GIT",
        "GitHub",
      ];

      const options = {
        radius: 330,
        maxSpeed: "fast", // Adjusted maxSpeed to "fastest"
        initSpeed: "fast", // Adjusted initSpeed to "fastest"
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-sphere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Sphere;
