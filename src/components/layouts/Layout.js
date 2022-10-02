import Navbar from "./Navbar";
import PropTypes from "prop-types";

const Layout = (props) => {
  return (
    <div className="dark:bg-slate-800 bg-gray-200">
      <Navbar />
      {props.children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
