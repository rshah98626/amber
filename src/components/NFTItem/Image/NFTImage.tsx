const NFTImage = (props: { imageLink: string }) => {
  return (
    <img
      className="img-fluid"
      src={props.imageLink}
      alt="What the NFT looks like in real life"
    />
  );
};

export default NFTImage;
