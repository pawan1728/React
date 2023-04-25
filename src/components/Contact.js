import { Outlet } from "react-router";
import Profile from "./ProfileClass";
const Contact = () => {
  return (
  <>
  <h2>This is Contact Us page</h2>
  <p>This is My Contact Page</p>
  <Outlet/>
  </>
  )
};
export default Contact;
