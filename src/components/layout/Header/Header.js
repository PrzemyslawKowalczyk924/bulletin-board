import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';
import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Icon from '../../common/Icon/Icon';

const Component = ({className, children}) => {
  /* state = {
    visible: true
  } */
  /* props = {

  } */
  
  const [userOnline, setUserOnline] = useState(false);

  return (
    <div className={clsx(className, styles.root)}>
      <Grid>
        <Row between="md" middle="xs">
          <Col md={3} lg={2}>
            <Link to='/'>
              <div className={styles.logo}>
                <Icon name='thumbtack' />
                <span className={styles.name}>Bulletin</span>
              </div>
            </Link>
          </Col>
          <Col md={6}>
            <nav>
              {userOnline ? <NavLink to='/post' activeClassName='active'>My Post&apos;s</NavLink> : null }
              {userOnline ? <NavLink to='/post' activeClassName='active' onClick={() => setUserOnline(false)}>Logout</NavLink> : null }
              {!userOnline ? <NavLink to='/auth/google' activeClassName='active' onClick={() => setUserOnline(true)}>Login with Google</NavLink> : null }
              {/* {state.visible ? <NavLink to='/post/add' activeClassName='active' onClick={() => setUserOnline(true)}>Testing</NavLink> : null } */}
            </nav>
          </Col>
        </Row>
      </Grid>
    </div>
  );  
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
