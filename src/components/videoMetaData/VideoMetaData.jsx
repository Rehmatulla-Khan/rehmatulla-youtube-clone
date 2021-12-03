import moment from "moment";
import numeral from "numeral";
import React, { useEffect } from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";
import ShowMoreText from "react-show-more-text";
import "./_videoMetaData.scss";
import { useSelector } from "react-redux";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;

  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="video-meta-data py-2">
      <div className="video-meta-data__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} views •
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="me-3">
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="me-3">
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>

        <div className="video-meta-data__channel d-flex justify-content-between align-items-center my-2 py-3">
          <div className="d-flex">
            <img
              src={channelSnippet?.thumbnails?.default?.url}
              alt="channel icon"
              className="rounded-circle me-3"
            />
            <div className="d-flex flex-column ">
              <span>{channelTitle}</span>
              <span>
                {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
                Subscribers
              </span>
            </div>
          </div>
          {console.log("here", subscriptionStatus)}
          <button
            className={`btn border-8 p-2 m-2 ${
              subscriptionStatus && "btn-gray"
            }`}
          >
            {subscriptionStatus ? "Subscribed" : "subscribe"}
          </button>
        </div>
      </div>
      <div className="video-meta-data__description">
        <ShowMoreText
          line={3}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="show-more-text"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
