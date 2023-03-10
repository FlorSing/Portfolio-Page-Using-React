import React from "react";

function EmailForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Search:</label>
        <input
          // onChange={}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button 
        // onClick={} 
        className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
