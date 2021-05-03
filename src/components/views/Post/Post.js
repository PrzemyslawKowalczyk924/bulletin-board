import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import HTMLParser from 'react-html-parser';

import styles from './Post.module.scss';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import TripPrice from '../../features/TripPrice/TripPrice';

const Post = ({ text }) => {

  return (
    <div className={styles.root}>
      <Grid>
        <PageTitle text={text} />
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
              </List>
            </Col>
          </Row>
        </Grid>
      </DetailsBox>
      {/* {children} */}
    </div>
  );
};

Post.propTypes = {
  text: PropTypes.string,
};

export default Post;
