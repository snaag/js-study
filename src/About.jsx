import React from "react";
import _ from "./string";

const About = () => {
  return (
    <>
      <h3>{_.me}</h3>
      <h4>
        {_.to} {_.plan}
      </h4>
      <h3>{_.infoTitle}</h3>
      {_.info.map(v => {
        return <li>{v}</li>;
      })}
      <h3>{_.policyTitle}</h3>
      {_.policy.map(v => {
        return <li>{v}</li>;
      })}
      <h3>{_.resume}</h3>
      <h4>{_.dueDate}</h4>
      <h4>
        <a href={_.resumeUrl} target="_blank">
          구글폼으로 이동합니다
        </a>
      </h4>
    </>
  );
};

export default About;
