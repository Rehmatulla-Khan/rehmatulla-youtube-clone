import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategories,
} from "../../redux/actions/videos.action";
import Video from "../../components/video/Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import "./_homeScreen.scss";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategories(activeCategory));
    }
  };

  return (
    <div>
      <Container>
        <CategoriesBar />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="mx-auto spinner-border text-danger d-block"></div>
          }
        >
          <Row>
            {videos.map((video) => (
              <Col lg={3} md={4} key={videos.id}>
                <Video video={video} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default HomeScreen;
