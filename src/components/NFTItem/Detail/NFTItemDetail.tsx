import { NFTItemProps } from "../../NFTItem";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    <>
      <h1>Artist: {props.data.artist}</h1>
      <h1>Current Bid: {props.data.ethPrice} eth</h1>

      <form onSubmit={onSubmit}>
        <label>Bid Amount:</label>
        <input {...register("amount")} />
        <p style={{ color: "red" }}>{errors.amount?.message}</p>
        <label>Approximate Location:</label>
        <input {...register("approximateLocation")} />
        <p style={{ color: "red" }}>{errors.approximateLocation?.message}</p>
        <input type="submit" />
        {/* <button onSubmit={makeBid}>Make new bid</button> */}
      </form>
    </>
  );
};

export default NFTItemDetail;
