import React from "react";
import superagent from 'superagent';
import "./style/landing.scss";

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: [],
      
        }
    }

    async componentDidMount() {
        const response = await superagent.get('https://pokeapi.co/api/v2/pokemon/');
        const pokemon = response.body.results || [];
        console.log(pokemon);
        this.setState({pokemon});
    }

    render() {
        return (
            <>
            <ul className='Pokemon'>
                {
                    this.state.pokemon.map((pokemon, index) => {
                        return <li key={Math.random()}>{pokemon.name}</li>
                    })
                }
            </ul>
            </>
            
        )
    }
}




export default Pokemon;