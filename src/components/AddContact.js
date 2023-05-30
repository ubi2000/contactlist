import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("fill all forms");
      return;
    }
    this.props.addCOntactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div>
        <h2>Add Contacts</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Enter your name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Submit</button>
        </form>
      </div>
    );
  }
}
export default AddContact;

// import React from "react";
// import AddContact from "./AddContact";

// const AddContact = () => {
//   return (
//     <div className="ui main">
//       <h2>Add Contacts</h2>
//       <form className="ui form">
//         <div className="field">
//           <label>Enter your name</label>
//           <input type="text" name="name" placeholder="Name" />
//         </div>
//         <div className="field">
//           <label>Email</label>
//           <input type="email" name="email" placeholder="Email" />
//         </div>
//         <button className="ui button blue">Submit</button>
//       </form>
//     </div>
//   );
// };
// export default AddContact;
