import React from "react";

const EmployeeCard = (props) => {
  return (
    <div className="col-md-12">
      <div className="row row-cols-lg-3 row-cols-md-1">
        {props.list.map((element, index) => (
          <div key={index} className="col mb-4">
            <div className="card h-100" style={{ width: "22rem" }}>
              <img
                src={element.picture.large}
                className="card-img-top"
                alt="employee-directory"
              />
              <div className="card-body">
                <h5 className="card-title">
                  Name:
                  {" " +
                    element.name.title +
                    " " +
                    element.name.first +
                    " " +
                    element.name.last}
                </h5>
                <p className="card-text">Gender: {element.gender}</p>
                <small className="card-text">
                  Location: {element.location.city}, {element.location.state}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeCard;
