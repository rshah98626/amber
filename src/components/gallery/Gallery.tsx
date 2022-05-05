import NFTItem, { NFTItemProps } from "../NFTItem";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../data.json";

const Gallery = () => {
  return (
    <Container>
      <h1>Gallery</h1>
      {result.map((a, topIdx) => {
        return (
          <Container key={topIdx}>
            <Row className="align-items-center">
              {Array.from(Array(itemsPerRow).keys()).map((idx) => {
                return (
                  <Col lg key={idx}>
                    {a[idx] !== undefined ? (
                      <NFTItem key={a[idx].id} data={a[idx]} />
                    ) : (
                      <></>
                    )}
                  </Col>
                );
              })}
            </Row>
          </Container>
        );
      })}
    </Container>
  );
};

const itemsPerRow = 3;
const result = data.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / itemsPerRow);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = []; // start a new chunk
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, [] as NFTItemProps[][]);

export default Gallery;
