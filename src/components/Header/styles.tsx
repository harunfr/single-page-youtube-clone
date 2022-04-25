import styled from 'styled-components';

import { AiFillYoutube } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineMic } from 'react-icons/md';
import { RiVideoUploadLine } from 'react-icons/ri';
import { IoAppsOutline } from 'react-icons/io5';
import { IoIosNotificationsOutline, IoIosMenu } from 'react-icons/io';
import { ImBrightnessContrast } from 'react-icons/im';
import PageText from '../helpers/PageText';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0.7rem 1.1rem;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.98);
`;

export const Wrapper = styled(ItemWrapper)`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : '0')};
`;
export const Text = styled(PageText)`
  font-family: 'YT Sans Serif', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #212121;
  letter-spacing: -2px;
  margin-left: -0.2rem;
`;

export const SearchBar = styled.input`
  width: 33.5rem;
  height: 2.5rem;
  outline: none;
  border: 1px solid #d3d3d3;
  margin-left: 3.5rem;
  font-size: 1.1rem;
`;
export const SandwichIcon = styled(IoIosMenu)`
  font-size: 1.9rem;
  font-weight: 100;
`;
export const Logo = styled(AiFillYoutube)`
  font-size: 2.4rem;
  color: red;
`;
export const SearchIcon = styled(FiSearch)`
  color: #858585;
  background-color: #f9f9f9;
  border: 1px solid #d3d3d3;
  border-left: none;
  width: 3.8rem;
  height: 2.5rem;
  padding: 5px;
  border-radius: 0 4px 4px 0;
`;
export const MicrophoneIcon = styled(MdOutlineMic)`
  background-color: #f9f9f9;
  border-radius: 50%;
  border-left: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 5px;
`;
export const UploadIcon = styled(RiVideoUploadLine)`
  font-size: 1.6rem;
  color: #c0c0c0;
`;
export const AppsIcon = styled(IoAppsOutline)`
  font-size: 1.6rem;
  color: #c0c0c0;
`;
export const NotificationsIcon = styled(IoIosNotificationsOutline)`
  font-size: 1.6rem;
  color: #c0c0c0;
`;
export const ThemeIcon = styled(ImBrightnessContrast)`
  font-size: 1.6rem;
  margin-right: 1rem;
`;
