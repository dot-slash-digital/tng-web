import SubpageJumbotron from "@components/subpage-jumbotron";
import AlternatingContent from "@components/working-with-us/alternating-content";
import content, { metadataContent } from "@content";

export const metadata = metadataContent.workingWithUs;

export default () => {
  const { alternatingContent, jumbotron } = content.workingWithUs;

  return (
    <>
      <SubpageJumbotron {...jumbotron} />
      {alternatingContent.map((content, index) => (
        <AlternatingContent {...content} flip={index % 2 !== 0} key={index} />
      ))}
    </>
  );
};
