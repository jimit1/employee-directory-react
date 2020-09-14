import React from "react";

const SortBar = (props) => {
  return (
    <div className="col-md-12">
      <form>
        <h4>Sort by First Name</h4>

        <fieldset className="form-group">
          <div className="row">
            <div className="col-sm-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="az"
                  onChange={props.sort}
                />
                <label className="form-check-label" htmlFor="gridRadios1">
                  A - Z
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="za"
                  onChange={props.sort}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  Z - A
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="none"
                  defaultChecked
                  onChange={props.sort}
                />
                <label className="form-check-label" htmlFor="gridRadios2">
                  None
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </form>

      <form>
        <h4>Filter by Gender</h4>
        <div className="form-group">
          <select id="gender" className="form-group" onChange={props.filter}>
            <option>both</option>
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <br />
      </form>
    </div>
  );
};

export default SortBar;
