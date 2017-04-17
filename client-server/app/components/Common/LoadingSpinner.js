import React from 'react';
import styles from './LoadingSpinner.css';

const LoadingSpinner = ({isFetching}) => {
  if (!isFetching) return null;
  return (
    <div className={styles.loaderBackground}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
};

LoadingSpinner.propTypes = {
  isFetching: React.PropTypes.bool.isRequired
};

export default LoadingSpinner;
