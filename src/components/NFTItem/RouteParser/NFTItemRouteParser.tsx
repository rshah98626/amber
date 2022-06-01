import { useMatch } from "react-router-dom";
import { NFTItemProps } from "..";
import data from "../../../data.json";
import NFTItemDetail from "../Detail";

const NFTItemRouteParser = () => {
  const pathMatch = useMatch("/item/:itemId");
  const itemProps = data.find(
    (item) => item.id === pathMatch?.params?.itemId
  ) as NFTItemProps | undefined;

  return itemProps ? <NFTItemDetail data={itemProps} /> : <h1>Invalid item</h1>;
};

export default NFTItemRouteParser;
