import React from "react";

const Facebook = props => {
  return (
    <a
      size="small"
      color="primary"
      target="_blank"
      href={props.social}
      className={props.classes.faceboolLinkContainer}
      rel="noopener noreferrer"
    />
  );
};

export default Facebook;
