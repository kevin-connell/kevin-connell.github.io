import React from "react";

function Contact() {
  return (
    <form class="container-fluid container-opaque">
    <h3>CONTACT</h3>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control"/>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="form-group">
      <label>Message</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  );
}

export default Contact;