import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
// import { ToggleInputProps } from '../../../interfaces';

const Wrapper = styled.span<any>`
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const ToggleInput = (props: any): JSX.Element => {
  const [value, setValue] = useState(props.checked || false);
  const handleChange = () => {
    setValue(!value);
    props.onChange && props.onChange({ name: props.name || 'toggle.name', value: !value });
  };
  useEffect(() => {
    setValue(props?.checked ? true : false);
  }, [props.checked]);
  return (
    <Wrapper>
      <label className="switch">
        <input name={props.name} checked={value} onChange={handleChange} type="checkbox" />
        <span className="slider round"></span>
      </label>
    </Wrapper>
  );
};
