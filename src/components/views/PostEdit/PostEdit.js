import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import HTMLParser from 'react-html-parser';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';
import List from '../../common/List/List';
import ListItem from '../../common/ListItem/ListItem';
import TripPrice from '../../features/TripPrice/TripPrice';

import styles from './PostEdit.module.scss';
import TextField from '@material-ui/core/TextField';

const handleTextChange = event => {
  const {target: {name, value}} = event;
  console.log(event.target.value);
}

const PostEdit = () => {
  return (
    <div className={styles.root}>
      <form className={styles.root} noValidate autoComplete="off">
        <Grid>
          <PageTitle text={'Add New Post'} />
          <div>
          </div>
        </Grid>
        <DetailsBox>
          <DetailsImage>
            <SideImage source={'https://images.unsplash.com/photo-1620295094360-bbed482aaaf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} />
          </DetailsImage>
          <Grid>
            <Row>
              <Col md={12} lg={6}>
                  <TextField className={styles.textField} id="outlined-basic" label="Main title" variant="outlined" type="text" onChange={handleTextChange}/>
                <div className={styles.intro}>
                  <TextField className={styles.textField} id="outlined-multiline-static" label="Description" variant="outlined" multiline rows={5} fullWidth="true" type="text" onChange={handleTextChange}/>
                </div>
                  <TextField className={styles.textField} id="outlined-basic" label="Name" variant="outlined" type="text" onChange={handleTextChange}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Email" variant="outlined" type="email" onChange={handleTextChange}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Town" variant="outlined" type="text" onChange={handleTextChange}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Price" variant="outlined" type="number" onChange={handleTextChange}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Phone" variant="outlined" type="tel" onChange={handleTextChange}/>
              </Col>
            </Row>
          </Grid>
        </DetailsBox>
      </form>
    </div>
  );
  
};

PostEdit.propTypes = {
};

export default PostEdit;