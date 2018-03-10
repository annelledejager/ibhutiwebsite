import * as React from 'react';
import axios from 'axios';

interface Icolors {
    color: string;
}

export class Get extends React.Component<any>  {
    state = {
        colors: Array<Icolors>()
    };

    componentDidMount() {
        axios.get(`https://simple-backend.herokuapp.com/colors/`)
            .then(res => {
                const colors = res.data;
                this.setState({ colors });
            });
    }
    render() {
        return (
            <ul>
                {this.state.colors.map(color => <li key={color.color}>{color.color}</li>)}
            </ul>
        );
    }
}

export default Get;
