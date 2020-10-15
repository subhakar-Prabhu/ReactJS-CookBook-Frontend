import React from 'react'

    const IFSCResults = ({ IfscResults }) => {
      if(IfscResults.length === 0){
        return null;
      }

      if(IfscResults === 'Not Found'){
        return (
          <div className="container" style={{marginTop: "41px", borderStyle: "groove"}}>
            <h5>
              No Data Found
            </h5>
          </div>
        );
      }

      return (
        <div className="container" style={{marginTop: "41px", borderStyle: "groove"}}>
          <h5>
            <u> Bank details: </u>
          </h5>
          Name: {IfscResults.BANK} <br /> Branch: {IfscResults.BRANCH}{" "}
          <br /> Ifsc Code: {IfscResults.IFSC} <br /> Address:{" "}
          {IfscResults.ADDRESS}
          <br /> City: {IfscResults.CITY} <br /> State:{" "}
          {IfscResults.STATE} <br />
        </div>
      );
    };

    export default IFSCResults