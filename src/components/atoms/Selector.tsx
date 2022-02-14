import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
// import { ISelector } from '../../interfaces';
import { AngleLeftIcon, AngleRightIcon } from '../icons';

const SelectorWrapper = styled.span<any>`
  ${({ theme, fixed }) => `
  position: ${fixed ? `absolute` : `static`};
  display: inline-flex;
  align-items:center;
  justify-content:center;
  border: 1px solid ${theme.colors.primary};
  top: -10px;
  left: 15px;
  // min-height: 25px;
  border-radius:6px;
  font-weight: bold;
`}
`;
const Part = styled.div<any>`
  padding: 0 10px;
  display: flex;
`;
const Values = styled.div<any>`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.primary};
    border-top: none;
    position: relative;
    cursor:pointer;
    border-bottom: none;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    font-size: 12px;
    > svg{
      margin-right: 10px;
    }
`}
`;
const Options = styled.div<any>`
  position: absolute;
  top: 100%;
  left: -1px;
  border: 1px solid grey;
  background-color: white;
  height: 200px;
  min-width: 150px;
  z-index: 5;
  overflow-y: auto;
  padding: 5px 0px;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;
const Option = styled.p<any>`
  padding: 10px 15px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
export const Selector = (props: any): JSX.Element => {
  const { onChange, name, value, options, icon } = props;
  const [showOptions, toggleShowOptions] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(options.map((data: any) => data.value).indexOf(value));
  const [currentValue, setCurrentValue] = useState(options[currentIndex]?.text || options[currentIndex]?.name);

  useEffect(() => {
    const _currentIndex = options.map((data: any) => data.value).indexOf(value);
    setCurrentIndex(_currentIndex);
    setCurrentValue(options[_currentIndex]?.text || options[_currentIndex]?.name);
  }, [value]);
  const setValue = (event: any) => {
    setCurrentValue(event.text || event.name);
    toggleShowOptions(false);
    setCurrentIndex(options.map((data: any) => data.value).indexOf(event.value));
    onChange && onChange({ target: { name, value: event } });
  };
  const navigateOption = (direction: number): void => {
    let _currentIndex = currentIndex + direction;
    if (direction > 0) {
      if (_currentIndex >= options.length) {
        _currentIndex -= direction;
        return;
      }
    } else {
      if (_currentIndex < 0) {
        _currentIndex -= direction;
        return;
      }
    }
    const value = options[_currentIndex];
    setCurrentIndex(_currentIndex);
    setCurrentValue(value.text || value.name);
    setValue({
      text: value.text || value.name,
      value: value,
    });
  };
  return (
    <SelectorWrapper {...props}>
      <Part onClick={() => navigateOption(-1)}>
        <AngleLeftIcon variant="brand" size={'xxs'} />
      </Part>
      <Values onClick={() => toggleShowOptions(!showOptions)}>
        {icon}
        {currentValue}
        <Options show={showOptions}>
          {options.map((data: any) => (
            <Option onClick={() => setValue(data)} key={Math.random()}>
              {data.text || data.name}
            </Option>
          ))}
        </Options>
      </Values>
      <Part onClick={() => navigateOption(1)}>
        <AngleRightIcon variant="brand" size="xxs" />
      </Part>
    </SelectorWrapper>
  );
};
