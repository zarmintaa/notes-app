import PropTypes from "prop-types";

const Wrapper = (props) => {
  return <div className="w-full lg:w-10/12 lg:mx-auto ">{props.children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
