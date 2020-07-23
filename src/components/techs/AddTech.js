import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the fields before submitting' });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added` });
      //Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              value={firstName}
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='input-field'>
          <input
            type='text'
            value={lastName}
            name='lastName'
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor='lastName' className='active'>
            Last Name
          </label>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          className='waves-light btn pink lighten-3 modal-close waves-effect'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
