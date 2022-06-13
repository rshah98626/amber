import { NFTItemProps } from "../../NFTItem";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import NFTImage from "../Image/NFTImage";

type BidData = {
  amount: number;
  approximateLocation: string;
};

const schema = yup
  .object({
    amount: yup.number().positive().required(),
    approximateLocation: yup.string().required(),
  })
  .required();

const NFTItemDetail = (props: { data: NFTItemProps }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<BidData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data: BidData) => console.log(data));

  return (
    <Container>
      <Row>
        <Col>
          <NFTImage imageLink={props.data.physicalImageLink} />
        </Col>
        <Col>
          <h1>Artist: {props.data.artist}</h1>
          <h1>Current Bid: {props.data.ethPrice} eth</h1>

          <form onSubmit={onSubmit}>
            <label>Bid Amount:</label>
            <input {...register("amount")} />
            <p style={{ color: "red" }}>{errors.amount?.message}</p>
            <label>Approximate Location:</label>
            <input {...register("approximateLocation")} />
            <p style={{ color: "red" }}>
              {errors.approximateLocation?.message}
            </p>
            <input type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default NFTItemDetail;
