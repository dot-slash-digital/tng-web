import ContactForm from "@components/contact/contact-form";
import SubpageJumbotron from "@components/subpage-jumbotron";
import content, { metadataContent } from "@content";

export const metadata = metadataContent.contact;

export default () => {
  const { jumbotron } = content.contact;

  return (
    <>
      <SubpageJumbotron {...jumbotron} />
      <ContactForm />
    </>
  );
};
