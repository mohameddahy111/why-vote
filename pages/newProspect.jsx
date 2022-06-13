import React, { useState } from 'react';
import styles from '../styles/newProspect.module.css';
import Image from 'next/image';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

function NewProspect() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [privateChecked, setPrivateChecked] = useState('private');
  const [photo, setPhoto] = useState('');
  const onSubmit = ({ website }) => {};
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Create New Prospect</h1>
      <div className={styles.contanier}>
        <div >
          {photo ? (
            <Image
              src={photo ? URL.createObjectURL(photo) : null}
              width={300}
              height={200}
              alt='photo'
            />
          ) : (
            <div className={styles.boxImage}>
              <label htmlFor='img'>
                <span>
                  <AddCircleIcon sx={{ fontSize: '40px' }} />
                </span>
              </label>
              <input
                type='file'
                name='img'
                id='img'
                onChange={e => {
                  setPhoto(e.target.files[0]);
                }}
                hidden
              />
              <p>upload an image or video clip</p>
            </div>
          )}
        </div>
        <div className={styles.checkBox}>
          <FormControl component='fieldset'>
            <RadioGroup
              sx={{ display: 'flex', flexDirection: 'row' }}
              aria-label='Private'
              name='privateChecked'
              value={privateChecked}
              control={<Radio />}
              onChange={e => setPrivateChecked(e.target.value)}
            >
              <FormControlLabel
                label='Private'
                value='private'
                control={<Radio />}
              ></FormControlLabel>
              <FormControlLabel
                label='Public'
                value='public'
                control={<Radio />}
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
          {privateChecked === 'private' && (
            <p className={styles.notePublic} > You need to be agold member above to make a prospect public</p>
          )}
        </div>
      </div>
      <div className={styles.input}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <List>
            <ListItem>
              <p>website </p>
            </ListItem>
            <ListItem>
              <Controller
                name='website'
                control={control}
                defaultValue=''
                rules={{
                  required: true,
                  pattern:
                    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
                }}
                render={({ filed }) => (
                  <TextField
                    error={Boolean(errors.website)}
                    fullWidth
                    className={styles.website}
                    id='website'
                    variant='filled'
                    placeholder='https://'
                    helperText={
                      errors.website
                        ? errors.website.tyep === 'pattern'
                          ? 'Invalid website'
                          : 'Website is required'
                        : null
                    }
                    {...filed}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <p>Choose Party</p>
            </ListItem>
            <ListItem>
              <Select fullWidth>

                {/* remove [...Array().keys()] and put your list .map */}
                {[...Array(10).keys()].map(x=>(
                  <MenuItem value={x} key={x}>{x} </MenuItem>
                ))}
              </Select>
            </ListItem>
          </List>
        </form>
      </div>
    </div>
  );
}

export default NewProspect;
