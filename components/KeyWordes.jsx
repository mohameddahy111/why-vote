import { Remove } from '@mui/icons-material';
import { IconButton, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../styles/keyWordes.module.css';

const KeyWordes = () => {
  const [inputList, setInputList] = useState([]);
  const [keyWordes, setKeyWordes] = useState('');

  const handelChenge = e => {
    const { value } = e.target;
    setKeyWordes(value);
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (keyWordes === '') {
      alert('Please enter a key word');
    } else {
      setInputList([...inputList, keyWordes]);
      setKeyWordes('');
    }
  };
  const handelRemove = index => {
    const newList = [...inputList];
    newList.splice(index, 1);
    setInputList(newList);
  };
  useEffect(() => {
    localStorage.setItem('keyWordes', JSON.stringify(inputList));
  }, [inputList]);

  return (
    (
      <div>
        <div className={styles.contanier}>
          <p>Add new keyWordes</p>
          <form onSubmit={handelSubmit} method='post'>
            <div className={styles.box}>
              <input
                className={styles.input}
                placeholder='keyWordes'
                type='text'
                value={keyWordes}
                name='keyWordes'
                id=''
                onChange={handelChenge}
              />
              <button type='submit' className={styles.addButton}>
                Add
              </button>
            </div>
          </form>
          <p>suggested keywords</p>
        </div>
        <div className={styles.keyWordes}>
          <List className={styles.list}>
            {inputList.map((keyWord, index) => (
              <div key={index} style={{ display: 'flex', gap: '5px' }}>
                <ListItem key={index}>
                  {keyWord}
                  <IconButton onClick={() => handelRemove(index)}>
                    <Remove />
                  </IconButton>
                </ListItem>
                <p>,</p>
              </div>
            ))}
          </List>
        </div>
      </div>
    )
  );
};

export default KeyWordes;
