import styled from 'styled-components';
import PageText from '../helpers/PageText';
import ItemWrapper from '../helpers/ItemWrapper';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1.5fr;
  background-color: #f9f9f9;
  margin-top: 3.9rem;
`;
export const Text = styled(PageText)``;
export const Wrapper = styled(ItemWrapper)``;
export const Main = styled.main`
  padding: 2rem;
`;
export const RelatedVideos = styled.aside`
  padding-top: 1.7rem;
  /* border: 2px solid black; */
`;
