import React from 'react';

import {
  VideoMetaData,
  Text,
  Wrapper,
  LikeIcon,
  DislikeIcon,
  ShareIcon,
  AddIcon,
  OptionsIcon,
  Title,
  VideoMetaDataSub,
  Avatar,
  SubscribeButton,
} from './styles';

interface Props {
  mainVideoId: string;
}

function MainVideo({ mainVideoId }: Props): React.ReactElement {
  return (
    <>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${mainVideoId}`}
        frameBorder="0"
        allowFullScreen
        title="Embedded youtube"
      />
      <VideoMetaData>
        <Title>Erkin Koray - Mesafeler (1973, High Quality)</Title>
        <Wrapper>
          <Wrapper>
            <Text>323,238 views</Text>
            &#x2022;
            <Text>Aug 2, 2013</Text>
          </Wrapper>
          <Wrapper gap="1.3rem">
            <Wrapper>
              <LikeIcon />
              <Text>4.9K</Text>
            </Wrapper>
            <Wrapper>
              <DislikeIcon />
              <Text>DISLIKE</Text>
            </Wrapper>
            <Wrapper>
              <ShareIcon />
              <Text>SHARE</Text>
            </Wrapper>
            <Wrapper>
              <AddIcon />
              <Text>SAVE</Text>
            </Wrapper>
            <OptionsIcon />
          </Wrapper>
        </Wrapper>
      </VideoMetaData>
      <VideoMetaDataSub>
        <Wrapper>
          <Wrapper>
            <Avatar src="https://yt3.ggpht.com/ytc/AKedOLQ4QENl7ACpFdIHF6XcNh9t58MdFkd0MoUc-GqUEQ=s48-c-k-c0x00ffffff-no-rj" />
            <Wrapper flexDirection="column" alignItem="scretch">
              <Text fontWeight="600">cappuccino81</Text>
              <Text>11.4K subscribers</Text>
            </Wrapper>
          </Wrapper>
          <SubscribeButton variant="contained">Subscribe</SubscribeButton>
        </Wrapper>
        <Text>{null}</Text>
      </VideoMetaDataSub>
    </>
  );
}

export default MainVideo;
