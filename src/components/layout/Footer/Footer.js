import React from 'react';

import styles from './Footer.module.scss';

const Component = () => (
  <div className={styles.root}>
    <footer>
      <small>Copyright &copy; Przemysław Kowalczyk 2021</small>
    </footer>
  </div>
);

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
