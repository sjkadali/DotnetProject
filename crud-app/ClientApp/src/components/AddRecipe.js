import React, { Component} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';

export class AddRecipe extends Component
{
    render() {
        return (
            <div>
                <h1>Add Recipe</h1>
                <Form>
                    <FormGroup>
                        <Label>
                           Name
                        </Label>
                        <Input type='text' name='name' id='name'></Input>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}