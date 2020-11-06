import React from "react";
import superagent from 'superagent';

class Pokemon extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: []
        }
    }

    async componentDidMount() {
        const response = superagent.get('https://pokeapi.co/api/v2/pokemon/');
    }
}




export default Pokemon;