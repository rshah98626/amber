import { NFTItemProps } from "../../NFTItem";

const NFTItemDetail = (props: { data: NFTItemProps }) => {
  return <h1>Artist: {props.data.artist}</h1>;
};

export default NFTItemDetail;
