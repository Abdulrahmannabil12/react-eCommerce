import React, { useState }from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label,  ...otherProps }) => {
const [hover,setHover]=useState(false);
 
const onEnter =()=>{
  if (!otherProps.value?.length){
    setHover(true)
  }
 }
  const onLeave = () => {
    if (!otherProps.value?.length) {
      setHover(false)
    }
  }
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} onMouseEnter={onEnter} onMouseLeave={onLeave}  />
      {label ? (
        <label
          className={`${otherProps.value?.length || hover  ? 'shrink' : ''
            } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  )


}
export default FormInput;
