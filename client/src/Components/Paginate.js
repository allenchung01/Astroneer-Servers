import React from "react";
import ReactPaginate from "react-paginate";

import "../Styles/Paginate.css";

function Paginate(props) {
  const { changePage, pageCount } = props;

  return (
    <ReactPaginate
      previousLabel={"←"}
      nextLabel={"→"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName="pagination-container"
      previousLinkClassName="previous-link"
      nextLinkClassName="next-link"
      disabledClassName="pagination-disabled"
      activeClassName="pagination-active"
      pageClassName="pagination-page"
    />
  );
}

export default Paginate;
