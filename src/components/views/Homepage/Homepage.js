import React from 'react';
import PropTypes from 'prop-types';
import PostsSummary from '../PostsSummary/PostsSummary';

//import clsx from 'clsx';

import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';

/* import PageTitle from '../../common/PageTitle/PageTitle';
import {Grid, Row, Col} from 'react-flexbox-grid'; */

const Homepage = ( {posts} ) => (
  <div className={styles.root}>
    {posts.length ? posts.map(post => (
      <Paper elevation={3} className={styles.paper}>  
        <PostsSummary key={post.id} {...post} />
      </Paper>  
    )) : (
      <p>Sorry, no results found. Try adjusting the filters.</p>
    )}
  </div>
);

Homepage.propTypes = {
  posts: PropTypes.array,
};

export default Homepage;
