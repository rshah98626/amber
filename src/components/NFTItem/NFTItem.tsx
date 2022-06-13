import styles from "./NFTItem.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { NFTItemProps } from ".";
import { useNavigate } from "react-router-dom";
import NFTImage from "./Image/NFTImage";

const NFTItem = (props: { data: NFTItemProps }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleClick = (data: NFTItemProps) => {
    navigate("/item/", { state: data });
  };
  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      onClick={() => handleClick(props.data)}
    >
      {isHovering ? (
        <NFTVideo data={props.data} />
      ) : (
        <NFTImageWithCaption data={props.data} />
      )}
    </div>
  );
};

const NFTImageWithCaption = (props: { data: NFTItemProps }) => {
  const { title, artist, ethPrice, physicalImageLink } = props.data;
  return (
    <figure className="position-relative">
      <NFTImage imageLink={physicalImageLink} />
      <figcaption className={styles.caption}>
        <Container>
          <Row>
            <Col>
              <h5>{title}</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{artist}</p>
            </Col>
            <Col>
              <p>{ethPrice} ETH</p>
            </Col>
          </Row>
        </Container>
      </figcaption>
    </figure>
  );
};

const NFTVideo = (props: { data: NFTItemProps }) => {
  const { digitalImageLink } = props.data;
  return (
    <video
      className={`img-fluid ${styles.video}`}
      preload="auto"
      autoPlay
      playsInline
      muted
      loop
    >
      <source src={digitalImageLink}></source>
    </video>
  );
};

export default NFTItem;
