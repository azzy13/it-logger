import React from 'react';

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: '30px' }}>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input type='search' id='search' />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
              <i className='material-icon'>close</i>
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
