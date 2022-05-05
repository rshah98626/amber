import styles from "./NFTItem.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { NFTItemProps } from ".";

const NFTItem = (props: { data: NFTItemProps }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      {isHovering ? (
        <NFTVideo data={props.data} />
      ) : (
        <NFTImage data={props.data} />
      )}
    </div>
  );
};

const NFTImage = (props: { data: NFTItemProps }) => {
  const { title, artist, ethPrice, physicalImageLink } = props.data;
  return (
    <figure className="position-relative">
      <img
        className="img-fluid"
        src={physicalImageLink}
        alt="what the nft looks like in real life"
      />
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
