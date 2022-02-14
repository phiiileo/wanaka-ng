import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Label, TextInput } from '../..';
import { useAlert } from '../../../hooks';
import { AddToWaitlistAction } from '../../../redux/actions/waitlist.action';
import {
  ActionButton,
  Column,
  FormControlGroup,
  FormImage,
  FormImageWrapper,
  FormWrapper,
  WaitListFormContainer,
  WaitListFormTitle,
  WaitListFormWrapper,
} from './styled';
import image from './../../../assets/images/form-image.png';
import { validateObjectData } from '../../../utils';
import { FinishWaitlistSignupAction } from '../../../redux/actions';
export const WaitlistForm = (props: any): JSX.Element => {
  console.log(props.data);
  const dispatch = useDispatch();
  const alert = useAlert();
  const addTowaitlist = (payload: any, cb: any) => dispatch(AddToWaitlistAction(payload, cb));
  const [loading, setLoading] = useState({
    updating: false,
  });
  const [user, setUser] = useState({
    fullname: '',
    first_name: '',
    last_name: '',
    email_address: '',
    referal_code: props?.data?.code,
  });
  const handleSubmit = (): void => {
    // validateObjectData(user);
    loading.updating = true;
    setLoading({ ...loading });
    const names = user.fullname.split(' ');
    if (names.length < 2) {
      alert.error('Fill in first name and last name');
      loading.updating = false;
      setLoading({ ...loading });
      return;
    }
    if (!user.email_address) {
      alert.error('Fill in your email address');
      loading.updating = false;
      setLoading({ ...loading });
      return;
    }
    user.first_name = names[0];
    user.last_name = names[1];
    addTowaitlist(user, (err: any, data: any) => {
      loading.updating = false;
      setLoading({ ...loading });
      if (err) {
        console.log(err.message);
        return alert.error(err.message);
      }
      console.log(data);
      alert.success(data.message);
      dispatch(FinishWaitlistSignupAction('close'));
      navigatePage('referral-section');
    });
  };
  useEffect(() => {
    // setUser(xuser);
  }, []);
  const handleChange = (event: any): void => {
    const { name, value } = event?.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigatePage = (path: string): void => {
    const docEls = document.getElementsByClassName(path);
    if (docEls.length < 1) return console.error('No document found with this classname');
    const docEl = docEls[0];
    docEl.scrollIntoView();
  };

  const setGender = (data: any): any => {
    // console.log(data);
    data.target.value = Number(data.target.value);
    handleChange(data);
  };
  const formatdateofBirth = (dob: string): string => {
    const ddate = new Date(dob);
    const month = ddate.getMonth() + 1 < 10 ? `0${ddate.getMonth() + 1}` : ddate.getMonth() + 1;
    const date = ddate.getDate() + 1 < 10 ? `0${ddate.getDate()}` : ddate.getDate();
    return `${ddate.getFullYear()}-${month}-${date}`;
  };
  return (
    <WaitListFormWrapper>
      <WaitListFormContainer>
        <WaitListFormTitle>Waiting List</WaitListFormTitle>
        {/* <UserContent> */}
        <Form>
          {() => (
            <>
              <FormWrapper>
                <Column col={1}>
                  <FormControlGroup>
                    <Label>Full Name</Label>
                    <TextInput
                      onChange={handleChange}
                      name="fullname"
                      value={user.fullname}
                      // bgcolor="light.green"
                      placeholder="Cole"
                      required
                    />
                  </FormControlGroup>
                  <FormControlGroup>
                    <Label>Email Address</Label>
                    <TextInput
                      onChange={handleChange}
                      name="email_address"
                      value={user.email_address}
                      // bgcolor="light.green"
                      placeholder="Sharman"
                      required
                    />
                  </FormControlGroup>
                  <FormControlGroup>
                    <Label>Referral Code</Label>
                    <TextInput
                      onChange={handleChange}
                      name="referal_code"
                      value={user.referal_code}
                      // bgcolor="light.green"
                      placeholder="Sharman"
                      required
                    />
                  </FormControlGroup>
                </Column>
              </FormWrapper>
              <ActionButton size="md" loading={loading.updating} disabled={loading.updating} onClick={handleSubmit}>
                Join Waiting List
              </ActionButton>
            </>
          )}
        </Form>
        {/* </UserContent> */}
      </WaitListFormContainer>
      <FormImageWrapper>
        <FormImage src={image} alt="" />
      </FormImageWrapper>
    </WaitListFormWrapper>
  );
};
