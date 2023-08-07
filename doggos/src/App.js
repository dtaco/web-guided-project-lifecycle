import React from 'react';
import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res)
    .catch(err => console.error('Check API for Error!'))
}

class App extends React.Component {
    
    constructor() {
        console.log('constructor ran!')
        super();
        this.state = {
            doggos: [],
            breed: 'husky'
        }
    }

    render() {
        console.log('rendering :-)')
        return (
            <>
            <h1>My App</h1>
            </>
        )
    }
}

export default App;
