import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../../hooks';
import { AvatarProps } from '../../../interfaces';
// import { UpdateUserProfileAction, UploadFileAction } from '../../../redux/actions';
import { getSize } from '../../../utils';
import { CameraIcon } from '../../icons';
import Spinner from '../Spinner';
import userImg from './../../../assets/images/user.png';

const AvatarMd = styled.img<any>`
  ${({ size, rounded }) => `
 width: ${size};
 height: ${size};
 border-radius: ${rounded ? `50%` : `5px`};
  `};
  cursor: pointer;
  object-fix: contain;
`;

const Wrapper = styled.span<any>`
  ${({ size, rounded }) => `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: ${rounded ? `50%` : `5px`};
  position: relative;
  
  & > span{
    display: none
  }
  &:hover{
    & span{
      display: block
    }
  }
`}
`;

const CameraWrapper = styled.span<any>`
  position: absolute;
  top: 25%;
`;

export const Avatar = ({ src = userImg, size = 'md', rounded = true, path, ...rest }: AvatarProps): JSX.Element => {
  const [image, setImage] = useState(src || userImg);
  const [fileUploading, setFileUploading] = useState(false);
  const _size = getSize(size);
  const history = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const reff = useRef(null);
  const handleRedirect = () => {
    history && history.bind(path);
    if (rest.editable && reff.current) {
      if (fileUploading) return;
      const inputEl: any = reff.current;

      inputEl?.click();
    }
  };

  const handleFileChange = (event: any) => {
    // console.log(event.target.files);
    processImageChange(event);
  };

  const processImageChange = (event: any) => {
    const images = event.target.files;
    const imageReader = new FileReader();
    imageReader.readAsDataURL(images[0]);
    imageReader.onload = (img: any) => {
      updateImageHandler(images[0]);
      const newImg = img.target.result;
      console.log(newImg);
      setImage(newImg);
    };
  };
  const updateImageHandler = (image: any) => {
    const confirm = window.confirm('Your profile image will be updated with the select one! OK?');
    if (!confirm) return setImage(src);
    const formData = new FormData();
    formData.append('fields', image);
    // console.log(typeof image);
    setFileUploading(true);
    // dispatch(
    //   UploadFileAction(formData, (err: any, data: any) => {
    //     setFileUploading(false);
    //     if (err) alert.error(err);
    //     else alert.success('Profile upload successul');
    //   }),
    // );
  };
  return (
    <Wrapper {...rest} rounded={rounded} onClick={handleRedirect}>
      {rest.editable && (
        <CameraWrapper>
          <input type="file" accept="image/*" onChange={handleFileChange} ref={reff} style={{ display: 'none' }} />
          {fileUploading ? <Spinner /> : <CameraIcon />}
        </CameraWrapper>
      )}
      <AvatarMd src={image} size={_size} />
    </Wrapper>
  );
};

export default Avatar;
