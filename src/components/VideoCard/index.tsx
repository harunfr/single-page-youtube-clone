import React from 'react';

import {
  Container, Wrapper, Text, ThumbnailWrapper,
} from './styles';

export interface Props {
  src: string;
  title: string;
  viewsCount: string;
  uploader: string;
  uploadedAt: string;
}

function VideoCard({
  src,
  title,
  viewsCount,
  uploader,
  uploadedAt,
}: Props): React.ReactElement {
  return (
    <Container>
      <ThumbnailWrapper src={src} />

      <Wrapper flexDirection="column">
        <Text fontWeight="700" fontSize="0.9rem" lineHeight="1.4">
          {title}
        </Text>
        <Text>{uploader}</Text>
        <Wrapper>
          <Text>
            {viewsCount}
            views
          </Text>
          &#x2022;
          <Text>
            {uploadedAt}
            ago
          </Text>
        </Wrapper>
      </Wrapper>
    </Container>
  );
}

export default VideoCard;
