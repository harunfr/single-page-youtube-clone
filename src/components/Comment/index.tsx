import React from 'react';

import {
  Container,
  Avatar,
  Wrapper,
  Text,
  LikeButton,
  DislikeButton,
} from './styles';

interface Props {
  src: string;
  userName: string;
  uploadedAt: string;
  message: string;
  likeCount: number;
}

function Comment({
  src,
  userName,
  uploadedAt,
  message,
  likeCount,
}: Props): React.ReactElement {
  return (
    <Container>
      <Avatar src={src} />
      <Wrapper flexDirection="column">
        <Wrapper>
          <Text fontWeight="600">{userName}</Text>
          <Text>{uploadedAt}</Text>
        </Wrapper>
        <Wrapper flexDirection="column" gap="1">
          <Text>{message}</Text>
          <Wrapper>
            <Wrapper>
              <LikeButton />
              <Text>{likeCount || null}</Text>
            </Wrapper>
            <DislikeButton />
            <Text>REPLY</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

export default Comment;
