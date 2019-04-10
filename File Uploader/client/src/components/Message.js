import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Message = ({ msg }) => {
  return (
    <Fragment>
      <div className="alert alert-warning alert-dismissible fade show">
        {msg}
      </div>
    </Fragment>
  );
};

Message.prototypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
