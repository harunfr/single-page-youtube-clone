import styled from 'styled-components';
import { BiLike, BiDislike } from 'react-icons/bi';
import PageText from '../helpers/PageText';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.div`
  display: flex;
  gap: 0.9rem;
  margin: 1.8rem 0;
`;
export const Wrapper = styled(ItemWrapper)`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  gap: ${(props) => (props.gap ? props.gap : '0.5')}rem;
`;
export const Text = styled(PageText)`
  font-size: 14px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
`;
export const Avatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;
export const LikeButton = styled(BiLike)``;
export const DislikeButton = styled(BiDislike)``;
