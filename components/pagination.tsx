import React from "react";

function Pagination() {
  return (
    <div className="pagination">
      <div className="pagination__entries">
        <p>Entries per page</p>
        <select name="entries" id="entries">
          <option value="3">3</option>
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
