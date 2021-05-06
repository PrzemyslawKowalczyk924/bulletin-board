import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import HTMLParser from 'react-html-parser';
import {Link} from 'react-router-dom';

import styles from './Post.module.scss';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import TripPrice from '../../features/TripPrice/TripPrice';
import Icon from '../../common/Icon/Icon';

const Post = ({ 
  id, text, source, intro, title, iconCalendar, iconMoney, iconStatus, iconEdit,  
  iconEmail, cost, status, dateOfPublication, dateOfActualizaction, email }) => {

  return (
    <div className={styles.root}>
      <Grid>
        <PageTitle text={text} />
      </Grid>
      <DetailsBox>
        <DetailsImage>
          <SideImage source={source} />
        </DetailsImage>
        <Grid>
          <Row>
            <Link to={`/post/${id}/edit`} className={styles.link}>
              <Icon name={'cog'}/>
            </Link>
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
      </DetailsBox>
      {/* {children} */}
    </div>
  );
};

Post.propTypes = {
  text: PropTypes.string,
  cost: PropTypes.number,
};

export default Post;
