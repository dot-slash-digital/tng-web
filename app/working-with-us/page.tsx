import SubpageJumbotron from "@components/subpage-jumbotron";
import AlternatingContent from "@components/working-with-us/alternating-content";
import content from "@content";

export default () => {
  const { alternatingContent, jumbotron } = content.workingWithUs;

  return (
    <>
      <div>Working with Us page</div>
      <SubpageJumbotron {...jumbotron} />
      <AlternatingContent />
      <AlternatingContent />
      <AlternatingContent />
    </>
  );
};
