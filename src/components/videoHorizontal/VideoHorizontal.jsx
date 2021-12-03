import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./_videoHorizontal.scss";

const VideoHorizontal = () => {
  const seconds = moment.duration("100").asSeconds();
  const durationInMs = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="video-horizontal m-1 py-2 align-align-items-center">
      <Col xs={6} md={4} className="video-horizontal__left">
        <LazyLoadImage
          src="https://w7.pngwing.com/pngs/772/542/png-transparent-favicon-drawing-arab-avatar-heroes-head-cartoon.png"
          alt="thumbnail"
          effect="blur"
          className="video-horizontal__thumbnail"
          wrapperClassName="video-horizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{durationInMs}</span>
      </Col>
      <Col xs={6} md={8} className="video-horizontal__right">
        <p className="video-horizontal__title mb-1">
          Be a full stack developer in 1 min
        </p>
        <div className="video-horizontal__details">
          <AiFillEye /> {numeral("12345678910").format("0.a")} views •
          {moment("2020-08-09").fromNow()}
        </div>
        <div className="video-horizontal-channel d-flex align-items-center my-1">
          {/* <LazyLoadImage
            src="https://w7.pngwing.com/pngs/772/542/png-transparent-favicon-drawing-arab-avatar-heroes-head-cartoon.png"
            alt="thumbnail"
            /> */}
          <p>Backbench Coder</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
