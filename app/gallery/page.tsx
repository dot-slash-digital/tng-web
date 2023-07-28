import Blueprints from "@components/gallery/blueprints";
import PreviousClients from "@components/gallery/previous-clients";
import SubpageJumbotron from "@components/subpage-jumbotron";
import content, { metadataContent } from "@content";

export const metadata = metadataContent.gallery;

export default () => {
  const { jumbotron } = content.gallery;

  return (
    <>
      <SubpageJumbotron {...jumbotron} />
      <PreviousClients />
      <Blueprints />
    </>
  );
};
