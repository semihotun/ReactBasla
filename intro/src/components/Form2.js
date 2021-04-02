
import React, { Component } from 'react';
import { Form, Button, FormGroup } from 'react-bootstrap'
import swal from 'sweetalert';

class Form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            city: "",
            description: ""
        }
    }
    ChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }
    SubmitHandler = (event) => {
        event.preventDefault();
        swal(this.state.email, "Başarıyla Eklendi", "success");

    }

    render() {
        return (
            <div>
                <Form onSubmit={this.SubmitHandler}>
                    <FormGroup>
                        <Form.Label for="email">Email</Form.Label>
                        <Form.Control type="email" Name="email" placeholder="Email giriniz" onChange={this.ChangeHandler}></Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="password">Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="password giriniz" onChange={this.ChangeHandler}></Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="text">City</Form.Label>
                        <Form.Control as="select" size="lg" name="city" onChange={this.ChangeHandler}>
                            <option>İzmir</option>
                            <option>İstanbul</option>
                            <option>Ankara</option>
                        </Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Form.Label for="text">Description</Form.Label>
                        <Form.Control as="textarea" name="description" placeholder="description giriniz" onChange={this.ChangeHandler}></Form.Control>
                    </FormGroup>
                    <FormGroup>
                        <Button variant="outline-dark" type="submit">Kaydet</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Form2;