export enum Page {
  CONTACT = "CONTACT",
  GALLERY = "GALLERY",
  HOME = "HOME",
  WORKING_WITH_US = "WORKING_WITH_US",
}

export const routes: { [page in Page]: string } = {
  [Page.CONTACT]: "/contact",
  [Page.GALLERY]: "/gallery",
  [Page.HOME]: "/",
  [Page.WORKING_WITH_US]: "/working-with-us",
};
