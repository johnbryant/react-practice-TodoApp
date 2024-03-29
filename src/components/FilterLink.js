import React from "react";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actions";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

const mapStateToFilterLinkProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchFilterLinkProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps));
    }
  };
};

const FilterLink = connect(
  mapStateToFilterLinkProps,
  mapDispatchFilterLinkProps
)(Link);

export default FilterLink;
