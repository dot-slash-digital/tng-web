import Blueprints from "@components/gallery/blueprints";
import PreviousClients from "@components/gallery/previous-clients";
import SubpageJumbotron from "@components/subpage-jumbotron";
import content from "@content";

export default () => {
  const { jumbotron } = content.gallery;

  return (
    <>
      <div>Gallery page</div>
      <SubpageJumbotron {...jumbotron} />
      <PreviousClients />
      <Blueprints />
    </>
  );
};
