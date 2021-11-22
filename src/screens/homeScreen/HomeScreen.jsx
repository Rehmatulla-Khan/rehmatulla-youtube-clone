import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { getPopularVideos } from "../../redux/actions/videos.action";
import Video from "../../components/video/Video";

import { useSelector } from "react-redux";
import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);

  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4} key={videos.id}>
              <Video video={video} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
