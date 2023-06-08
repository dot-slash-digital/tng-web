import AlternatingContent from "@components/working-with-us/alternating-content";
import Jumbotron from "@components/working-with-us/jumbotron";

export default () => {
  return (
    <>
      <div>Working with Us page</div>
      <Jumbotron />
      <AlternatingContent />
      <AlternatingContent />
      <AlternatingContent />
    </>
  );
};
