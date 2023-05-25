import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contacts</h2>
        <form className="ui form">
          <div className="field">
            <label>Enter your name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <button className="ui button blue">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddContact;
