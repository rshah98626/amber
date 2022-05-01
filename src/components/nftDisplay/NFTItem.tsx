import styles from "./NFTItem.module.css";
import { Container, Row, Col } from "react-bootstrap";

const NFTItem = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              className={styles.digitalItem}
              src="https://verilink.mypinata.cloud/ipfs/QmQ5LVdw8RH9he4b7bjoK1wis8DqsztQVkQjZDnniQ7foE"
              alt="what the nft looks like in real life"
            ></img>
          </Col>
          <Col>
            <video
              className={styles.digitalItem}
              preload="auto"
              autoPlay
              playsInline
              muted
              loop
            >
              <source src="https://verilink.mypinata.cloud/ipfs/QmQShDSrVZ76Ba4hDKN2V1ghLy3jqCrGw3A8YxbRa4THPr"></source>
            </video>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>Description:</p>
          </Col>
          <Col>
            <p>artwork Rahul made</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NFTItem;
