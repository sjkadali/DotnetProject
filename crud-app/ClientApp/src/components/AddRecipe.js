import React, { Component} from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

export class AddRecipe extends Component
{
    constructor(props)
    {
        super();
        this.state = {
            showResult: false,
            Id: 0,
            ImageId: 0,
            Recipename: 'Pizza',
            Category: 3,
            Description: ""
        }
    }

    myChangeHandler = (event) =>
    {
        let name = event.target.name;
        let value = event.target.value;
            console.log(name);
            console.log(value);
        this.setState({[name]: value });
    }

    onSubmitHandler= (event) =>
    {   
        this.setState(
            {Id: parseInt(this.state.Id) + 1},
            {ImageId: parseInt(this.state.ImageId) + 1 },
            {showResult: true}
        );
    }

    render() {
        return (
            <div>
                <h1>Add Recipe</h1>
                <Form>
                    <FormGroup>                                           
                        <Label>
                           Recipe Name
                        </Label>
                        <Input type='text' name='Recipename' id='Recipename' onChange={this.myChangeHandler}></Input>
                        <Label>
                           Category
                        </Label>
                        <Input type='select' name='Category' id='Category' onChange={this.myChangeHandler}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </Input>
                        <Label>
                           Description
                        </Label>
                        <Input type='text' name='Description' id='Description' onChange={this.myChangeHandler}></Input>
                    </FormGroup>
                    <Button onClick={this.onSubmitHandler}>Submit</Button>
                </Form>

                ( if{this.state.showResult} && (
                    <div>
                        <h1>{this.state.Recipename}</h1>
                        <FormGroup>
                            <Label>Id: {this.state.Id}</Label>
                            <Label>ImageId: {this.state.ImageId}</Label>
                            <Label>Recipename: {this.state.Recipename}</Label>
                            <Label>Category: {this.state.Category}</Label>
                            <Label>Description: {this.state.Description}</Label>
                        </FormGroup>
                    </div>
                ) )
            </div>
        )
    }
}