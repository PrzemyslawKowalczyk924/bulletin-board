import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import clsx from 'clsx';
import HTMLParser from 'react-html-parser';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import TripPrice from '../../features/TripPrice/TripPrice';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Grid>
      <PageTitle text={'New Message'} />
    </Grid>
    <DetailsBox>
      <DetailsImage>
        <SideImage source={'https://images.unsplash.com/photo-1619441688769-be34ecf157d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} />
      </DetailsImage>
      <Grid>
        <Row>
          <Col md={12} lg={4}>
            <div className={styles.intro}>
              {HTMLParser('intro')}
            </div>
            <List variant='light'>
              <ListItem title={`<strong>Duration:</strong> 11 days`} icon='calendar-alt' />
              <TripPrice icon='money-bill-wave' cost={'100'}/>
              {/*<ListItem title={`<strong>Price:</strong> from ${cost}`} icon='money-bill-wave' />*/}
            </List>
          </Col>
        </Row>
      </Grid>
    </DetailsBox>
    {children}
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
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
