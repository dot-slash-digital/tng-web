import ContactForm from "@components/contact/contact-form";
import SubpageJumbotron from "@components/subpage-jumbotron";
import content from "@content";

export default () => {
  const {jumbotron} = content.contact;

  return (
    <>
      <div>Contact page</div>
      <SubpageJumbotron {...jumbotron} />
      <ContactForm />
    </>
  );
};
