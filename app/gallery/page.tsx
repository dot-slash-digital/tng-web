import Blueprints from "@components/gallery/blueprints";
import PreviousClients from "@components/gallery/previous-clients";
import Jumbotron from "@components/working-with-us/jumbotron";

export default () => {
  return (
    <>
      <div>Gallery page</div>
      <Jumbotron />
      <PreviousClients />
      <Blueprints />
    </>
  );
};
