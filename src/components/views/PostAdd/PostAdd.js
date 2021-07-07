import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-flexbox-grid';
import shortid from 'shortid';

import PageTitle from '../../common/PageTitle/PageTitle';
import DetailsBox from '../../common/DetailsBox/DetailsBox';
import DetailsImage from '../../common/DetailsImage/DetailsImage';
import SideImage from '../../common/SideImage/SideImage';

import styles from './PostAdd.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';


const PostAdd = ({addPost}) => {

  const handleSubmit = (event) => {
    event.preventDefault();

    let post = ({
      _id: shortid(),
      title: titleInput,
      photo: photoInput,
      text: textInput,
      price: priceInput,
      status: 'published',
      /* created: ,
      updated: , */
      email: emailInput,
      author: authorInput,
      location: locationInput,   
      phone: phoneInput,
    });
    addPost(post);
  }

/*   const setPhoto = (e) => {
    e.preventDefault();
    const file = Array.from(e.target.files)[0];
    setphotoInput(file);
  } */

  const [titleInput, setTitleInput] = useState('');
  const [photoInput, setPhotoInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [priceInput, setPriceInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!photoInput) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(photoInput)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [photoInput])

const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setPhotoInput(undefined)
        return
    }

    // I've kept this example simple by using the first image instead of multiple
    setPhotoInput(e.target.files[0])
}

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
            <input name="photo" accept="image/*" className={styles.input} id="icon-button-file" type="file" onChange={onSelectFile} />
            {photoInput &&  <img src={preview} /> }
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </DetailsImage>
          <Grid>
            <Row>
              <Col md={12} lg={6}>
                  <TextField className={styles.textField} id="outlined-basic" label="Main title" variant="outlined" type="text" value={titleInput} onChange={(event) => setTitleInput(event.target.value)}/>
                <div className={styles.intro}>
                  <TextField className={styles.description} id="outlined-multiline-static" label="Description" variant="outlined" multiline rows={5}  type="text" value={textInput} onChange={(event) => setTextInput(event.target.value)}/>
                </div>
                  <TextField className={styles.textField} id="outlined-basic" label="Author" variant="outlined" type="text" value={authorInput} onChange={(event) => setAuthorInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Email" variant="outlined" type="email" value ={emailInput} onChange={(event) => setEmailInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Location" variant="outlined" type="text" value={locationInput} onChange={(event) => setLocationInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Price" variant="outlined" type="number" value={priceInput} onChange={(event) => setPriceInput(event.target.value)}/>
                  <TextField className={styles.textField} id="outlined-basic" label="Phone" variant="outlined" type="tel" value={phoneInput} onChange={(event) => setPhoneInput(event.target.value)}/>
              </Col>
            </Row>
          </Grid>
        </DetailsBox>
        <Button className={styles.button} type="submit" variant="contained">Add Post</Button>
      </form>
    </div>
  );
  
};

PostAdd.propTypes = {
  addPost: PropTypes.func,
};

export default PostAdd;