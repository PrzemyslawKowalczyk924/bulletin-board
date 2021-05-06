import React from 'react';
import PropTypes from 'prop-types';
/* import {Grid, Row, Col} from 'react-flexbox-grid';
import HTMLParser from 'react-html-parser'; */

import clsx from 'clsx';

/* import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import TripPrice from '../../features/TripPrice/TripPrice'; */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    {/* <Grid>
        <PageTitle text={'Add Post'} />
      </Grid>
      <DetailsBox>
        <DetailsImage>
          <SideImage source={} />
        </DetailsImage>
        <Grid>
          <Row>
            <Col md={12} lg={4}>
              <div className={styles.intro}>
                {HTMLParser(intro)}
              </div>
              <List variant='light'>
                <ListItem title={title} icon={iconCalendar} dateOfPublication={dateOfPublication} />
                <ListItem title={'<strong>Last update:</strong>'} icon={iconEdit} dateOfActualizaction={dateOfActualizaction} />
                <ListItem title={status} icon={iconStatus} />
                <ListItem title={email} icon={iconEmail} />
                <TripPrice icon={iconMoney} cost={cost}/>
              </List>
            </Col>
          </Row>
        </Grid>
      </DetailsBox> */}
  </div>
);

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
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
