import { List, ListItem } from '@mui/material';
import React, { useState } from 'react';
import styles from '../styles/keyWordes.module.css';

const KeyWordes = () => {
  const keyWordes =[
    'key',
    'key1',
    'computer',
    'laptop',
  ];

  const [query, setQuery] = useState('');
  const updateQuery = query => {
    setQuery(query.trim());
  };
  const showingKeyWords =
    query === ''
      ? keyWordes
      : keyWordes.filter(c =>
          c.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div>
      <div className={styles.contanier}>
      <p>Add new keyWordes</p>
      <div className={styles.box}>

        <input
        className={styles.input}
        placeholder="keyWordes"
          type='text'
          name=''
          id=''
          value={query}
          onChange={e => updateQuery(e.target.value)}
        />
        <button className={styles.addButton}>Add</button>
      </div>
        <p>suggested keywords</p>
      </div>
      <div className={styles.keyWordes}>
        {showingKeyWords.map((keyWord, index) => {
          return <div key={index} > <List  className={styles.list} >
            <ListItem  onClick={()=>{setQuery(keyWord)}} >{keyWord}</ListItem>
            </List></div>
        })}
      </div>
    </div>
  );
};

export default KeyWordes;
