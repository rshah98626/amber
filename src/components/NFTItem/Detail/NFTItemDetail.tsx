import { useLocation } from "react-router-dom";
import { NFTItemProps } from "..";

const NFTItemDetail = () => {
  const state = useLocation().state;
  console.log(state);
  const hasNameProps = (
    state: object | null | NFTItemProps | unknown
  ): state is NFTItemProps => {
    // you use `as` here, but only so typescript doesn't yell at you while you access the property
    // specifically to test if it is there
    return (state as NFTItemProps)?.id !== undefined;
  };

  return (
    <h1>Detail title: {hasNameProps(state) ? state.artist : undefined}</h1>
  );
};

export default NFTItemDetail;
