import React, { useEffect, useState } from 'react';

import { Container, Main, RelatedVideos } from './styles';

import VideoCard from '../VideoCard';
import MainVideo from '../MainVideo';
import Comment from '../Comment';

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
    channelTitle: string;
  };
}

interface CommentTypes {
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        authorDisplayName: string;
        authorProfileImageUrl: string;
        textDisplay: string;
        likeCount: number;
        uploadedAt: string;
      };
    };
  };
}

function PageBody() {
  const mainVideoId = 'NQNPdS77vpk';
  const [videos, setVideos] = useState<Video[] | []>([]);
  const [comments, setComments] = useState<CommentTypes[] | []>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyAMFuxjm2GZw50CGN287bkg--iRFaZ8UJA&textFormat=plainText&part=snippet&videoId=${mainVideoId}&maxResults=10`,
      );
      const fetchedData = await response.json();
      const fetchedComments = fetchedData.items;
      setComments(fetchedComments);
    };
    fetchComments();

    const fetchRelatedVideos = async () => {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${mainVideoId}&type=video&key=AIzaSyAMFuxjm2GZw50CGN287bkg--iRFaZ8UJA&maxResults=10`,
      );
      const fetchedData = await response.json();
      const fetchedVideos = fetchedData.items.slice(1);
      setVideos(fetchedVideos);
    };
    fetchRelatedVideos();
  }, []);

  return (
    <Container>
      <Main>
        <MainVideo mainVideoId={mainVideoId} />
        <>
          {comments.map((comment) => {
            const commentData = comment.snippet.topLevelComment.snippet;
            return (
              <Comment
                key={comment.id}
                src={commentData.authorProfileImageUrl}
                userName={commentData.authorDisplayName}
                uploadedAt={commentData.uploadedAt}
                message={commentData.textDisplay}
                likeCount={commentData.likeCount || 10}
              />
            );
          })}
        </>
      </Main>
      <RelatedVideos>
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            src={video.snippet.thumbnails.default.url}
            title={video.snippet.title}
            viewsCount="2.4M"
            uploader={video.snippet.channelTitle}
            uploadedAt="uploaded now"
          />
        ))}
      </RelatedVideos>
    </Container>
  );
}

export default PageBody;
