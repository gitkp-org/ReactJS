import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <Fragment>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        >
          {percentage}%
        </div>
      </div>
    </Fragment>
  );
};

Progress.prototypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;
