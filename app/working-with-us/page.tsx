import AlternatingContent from "@components/working-with-us/alternating-content";
import Jumbotron from "@components/working-with-us/jumbotron";
import content from "@content";

export default () => {
  const { alternatingContent } = content.workingWithUs;

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
