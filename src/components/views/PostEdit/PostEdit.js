import React, { useState } from 'react';
/* import PropTypes from 'prop-types'; */
import {Grid, Row, Col} from 'react-flexbox-grid';

import shortid from 'shortid';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';

import styles from './PostEdit.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


const PostEdit = ({addPost}) => {

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      id: shortid(),
      text: textInput,
      source: sourceInput,
      intro: introInput,
      cost: costInput,
     /*  status: ,
      dateOfPublication: ,
      dateOfActualizaction: , */
      email: emailInput,
      name: nameInput,
      town: townInput,   
      phone: phoneInput,
    }
    addPost(post);
    console.log('warrning', event);
  }

  const [textInput, setTextInput] = useState('');
  const [sourceInput, setSourceInput] = useState('');
  const [introInput, setIntroInput] = useState('');
  const [costInput, setCostInput] = useState('');
  const [townInput, setTownInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  
  return (
    <div className={styles.root}>
      <form className={styles.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
        <Grid>
          <PageTitle text={'Add New Post'} />
          <div>
          </div>
        </Grid>
        <DetailsBox>
          <DetailsImage>
            <input accept="image/*" className={styles.input} id="icon-button-file" type="file" value={sourceInput} onChange={(event) => setSourceInput(event.target.value)} />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <SideImage source={'https://images.unsplash.com/photo-1620295094360-bbed482aaaf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'} />
          </DetailsImage>
          <Grid>
            <Row>
              <Col md={12} lg={6}>
                  <TextField className={styles.textField} id="outlined-basic" label="Main title" variant="outlined" type="text" value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
                <div className={styles.intro}>
                  <TextField className={styles.textField} id="outlined-multiline-static" label="Description" variant="outlined" multiline rows={5} type="text" value={introInput} onChange={(event) => setIntroInput(event.target.value)}/>
                </div>
                  <TextField className={styles.textField} id="outlined-basic" label="Name" variant="outlined" type="text" value={nameInput} onChange={(event) => setNameInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Email" variant="outlined" type="email" value ={emailInput} onChange={(event) => setEmailInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Town" variant="outlined" type="text" value={townInput} onChange={(event) => setTownInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Price" variant="outlined" type="number" value={costInput} onChange={(event) => setCostInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Phone" variant="outlined" type="tel" value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)}/>
              </Col>
            </Row>
          </Grid>
        </DetailsBox>
        <Button className={styles.button} variant="contained">Add Post</Button>
      </form>
    </div>
  );
  
};

PostEdit.propTypes = {
};

export default PostEdit;