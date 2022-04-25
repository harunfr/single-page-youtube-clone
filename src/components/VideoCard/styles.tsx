import styled from 'styled-components';

import ItemWrapper from '../helpers/ItemWrapper';
import PageText from '../helpers/PageText';

export const Container = styled.div`
  display: flex;
  padding: 0.26rem;
  gap: 0.6rem;
`;
export const ThumbnailWrapper = styled(ItemWrapper)`
  min-width: 168px;
  height: 94px;
  background-image: url('${(props) => (props.src ? props.src : null)}');
`;

export const Wrapper = styled(ItemWrapper)`
  display: flex;
  align-items: flex-start;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'row'};
  justify-content: flex-start;
  gap: 0.4rem;
`;

export const Text = styled(PageText)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '0.8rem')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '400')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '1')};
`;
