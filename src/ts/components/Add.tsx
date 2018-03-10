import * as React from 'react';
import axios from 'axios';

export class Add extends React.Component<any> {
    state = {
        color: '',
    };

    handleChange = (event: any) => {
        this.setState({ color: event.target.value });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const payload = {
            'color': this.state.color
        };
        console.log(payload);
        axios.post(`https://simple-backend.herokuapp.com/colors/`, payload)
            .then((res: any) => {
                console.log(res);
                console.log(res.data);
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Colors:
                        <input type="text" name="color" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default Add;
