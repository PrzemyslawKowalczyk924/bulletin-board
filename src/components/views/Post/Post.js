import React from 'react';
import PropTypes from 'prop-types';
import HTMLParser from 'react-html-parser';
import {Link} from 'react-router-dom';

import styles from './Post.module.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import TripPrice from '../../features/TripPrice/TripPrice';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import Icon from '../../common/Icon/Icon';

const Post = ({ 
  id, user, text, source, intro, title, name, cost, town, status, phone, dateOfPublication, dateOfActualizaction, email }) => {

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
          {user.status ? <Link to={`/post/${id}/edit`} className={styles.link}>
              <Icon name={'cog'}/>
            </Link> : null}
            <Col md={12} lg={4}>
              <div className={styles.intro}>
                {HTMLParser(intro)}
              </div>
              <List variant='light'>
                <ListItem title={title} icon={'calendar-alt'} dateOfPublication={dateOfPublication} />
                <ListItem title={'<strong>Last update:</strong>'} icon={'edit'} dateOfActualizaction={dateOfActualizaction} />
                <ListItem title={'<strong>Name:</strong>' + '  ' + name} icon={'user'} />
                <ListItem title={status} icon={'spinner'} />
                <ListItem title={email} icon={'envelope-square'} />
                <ListItem title={'Country' + ' ' + town} icon={'globe-europe'} />
                <ListItem title={'Phone' + ' ' + phone} icon={'phone'} />
                <TripPrice icon={'money-bill-wave'} cost={cost}/>
              </List>
            </Col>
          </Row>
        </Grid>
      </DetailsBox>
    </div>
  );
};

Post.propTypes = {
  text: PropTypes.string,
  cost: PropTypes.number,
  user: PropTypes.object,
};

export default Post;
