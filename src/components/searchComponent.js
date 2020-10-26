import React, { useState } from 'react';
import { Icon } from './icons';
import {ListItems} from './listItems';

const styles = {
  box: {
    backgroundColor: '#4A4A4A',
    borderRadius: 12,
    display: 'flex',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
  },
  input: {
    padding: 0,
    paddingLeft: '.5rem',
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: 'none',
    flex: 1,
    fontSize: '1rem',
  },
  button: {
    padding: 0,
    paddingRight: '.5rem',
    border: 0,
    backgroundColor: 'transparent'
  }
}

export const SearchComponent = ({
  onSubmit,
  isDataLoading,
  dataList,
  iconName
}) => {

  const [inputValue, setInputValue] = useState('');
  const handleChange = ({ target }) => setInputValue(target.value);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(inputValue)
  };

  return (
    <div>
    <form style={styles.box} onSubmit={onSubmitHandler}>
      <input style={styles.input} type="text" value={inputValue} placeholder="Search Repos" onChange={handleChange} />
      <button style={styles.button}>
        <Icon size={30} name="search" />
      </button>
    </form>
    <ListItems list={dataList} isDataLoading={isDataLoading} iconName={iconName}/>
    </div>
  );
}