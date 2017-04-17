import React from 'react';

const Notification = ({ hasError, error, clearErrorState }) => {
  if (!hasError) return null;
  return (
    <div
      className="notification is-danger has-text-centered"
      style={{marginBottom: 0}}
    >
      <button className="delete" onClick={clearErrorState}></button>
      <p>Oops! Something went wrong.</p>
      <p><small>{error}</small></p>
    </div>
  );
};

Notification.propTypes = {
  hasError: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string,
  clearErrorState: React.PropTypes.func.isRequired
};

export default Notification;
