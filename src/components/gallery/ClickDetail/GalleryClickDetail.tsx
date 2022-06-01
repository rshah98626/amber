import { useLocation } from "react-router-dom";
import { NFTItemProps } from "../../NFTItem";
import NFTItemDetail from "../../NFTItem/Detail";

const GalleryClickDetail = () => {
  const state = useLocation().state;
  // console.log(state);
  const hasNameProps = (
    state: object | null | NFTItemProps | unknown
  ): state is NFTItemProps => {
    // you use `as` here, but only so typescript doesn't yell at you while you access the property
    // specifically to test if it is there
    return (state as NFTItemProps)?.id !== undefined;
  };

  return (
    <div>
      {hasNameProps(state) ? (
        <NFTItemDetail data={state} />
      ) : (
        <h1>404 (gallery detail)</h1>
      )}
    </div>
  );
};

export default GalleryClickDetail;
