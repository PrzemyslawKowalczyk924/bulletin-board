import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostsSummary.module.scss';
import {Col} from 'react-flexbox-grid';
import {Link} from 'react-router-dom';
//import TripPrice from '../../features/TripPrice';

const PostsSummary = ({id, source, text, dateOfPublication}) => (
  <Col xs={12} sm={12} lg={12} className={styles.column}>
    <Link to={`/post/${id}`} className={styles.link}>
      <article className={styles.component}>
        <img src={source} alt={'some view'} />
        <h3 className={styles.title}>{text}</h3>
        <div className={styles.details}>
          <span>{dateOfPublication}</span>
          {/* <TripPrice cost={cost} icon=''  /> */}
        </div>
      </article>
    </Link>  
  </Col>
);

PostsSummary.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.string,
  source: PropTypes.string,
  dateOfPublication: PropTypes.string,
};

export default PostsSummary;
