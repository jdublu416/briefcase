// import React from 'react';
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";

// const Register = () => {
//     state = {
//         name: "",
//         email: "",
//         password: ""
//     }

//     onChange = (e) => {
//         this.setState({
//         [e.target.name] : e.target.name
//         });
//     }

//     onSubmit = (e) => {
//         e.preventDefault();
//         const newRegisteredUser = {
//             id: uuid(),
//             name: this.state.name,
//             email: this.state.email,
//             password: this.state.password
//         }
//     }
//     return (
//         <Form onSubmit={this.onSubmit}>
//             <FormGroup>
//                 <Label for="name">Name:</Label>
//                 <Input type="text" name="name" id="name" placeholder="Name" onChange= {this.onChange} />
//                 <Label for="email"> Email:</Label>
//                 <Input type="email" email="email" id="email" placeholder="Email" onChange={this.onChange} />
//                 <Label for="password">Password:</Label>
//                 <Input for="password" name="password" id="password" placeholder="Password" onChange={this.onChange}></Input>
//             </FormGroup>
//         </Form>
//     )
// }

// export default Register
