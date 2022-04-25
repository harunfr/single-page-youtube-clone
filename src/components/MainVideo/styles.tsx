import styled from 'styled-components';

import { BiLike, BiDislike, BiDotsHorizontalRounded } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { MdPlaylistAdd } from 'react-icons/md';

import Button from '@mui/material/Button';
import ItemWrapper from '../helpers/ItemWrapper';
import PageText from '../helpers/PageText';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  overflow-x: hidden;
`;

export const VideoMetaData = styled.div`
  border-bottom: 1px solid #e7dfdf;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled(PageText)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '1rem')};
`;
export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const Wrapper = styled(ItemWrapper)`
  display: flex;
  justify-content: space-between;
  gap: ${(props) => (props.gap ? props.gap : '0.5rem')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${(props) => (props.alignItem ? props.alignItem : 'center')};
`;

export const LikeIcon = styled(BiLike)`
  font-size: 1.4rem;
`;
export const DislikeIcon = styled(BiDislike)`
  font-size: 1.4rem;
`;
export const ShareIcon = styled(RiShareForwardLine)`
  font-size: 1.4rem;
`;
export const AddIcon = styled(MdPlaylistAdd)`
  font-size: 1.4rem;
`;
export const OptionsIcon = styled(BiDotsHorizontalRounded)`
  font-size: 1.4rem;
`;

export const VideoMetaDataSub = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e7dfdf;
`;
export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
export const SubscribeButton = styled(Button)`
  && {
    background-color: #c00;
    height: 2rem;
    border-radius: 0;
    font-weight: 600;
  }
  &&:hover {
    background-color: #c00;
    box-shadow: 0px 0px 0px 0px #fff;
  }
  &&:active {
    transform: scale(1);
    box-shadow: 0;
  }
`;
