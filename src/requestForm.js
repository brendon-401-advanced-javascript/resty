import React from 'react';
import superagent from 'superagent';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        request: "",
        textArea: "",
        url: "",
        results:[]
      };
    }
  
    handleEventChange = (event) => {
      const restMethod = event.target.name;
      const requestValue = event.target.value;
      console.log(restMethod, requestValue);
      this.setState({ [restMethod]: requestValue });
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      console.log(this.state);
      const textArea = `${this.state.request} ${this.state.url}`;
      this.setState({textArea});
      const response = await superagent[this.state.request](this.state.url)
      const results = response.body.results || [];
      console.log(results);
      this.setState([results]);
      console.log(this.state);
      
    };

  
    render() {
      return (
          <form onSubmit={this.handleSubmit} className='requestForm'>
            <input 
            value={this.state.url}
            name="url"
            type="url"
            placeholder="http://www.url.com"
            onChange={this.handleEventChange}
            />
            <button type="submit">Submit</button>
            <br />
            <div className="methodButtons">
              <input
                type="radio"
                name="request"
                value="get"
                onChange={this.handleEventChange}
              />
              <label>GET</label>
              <input
                type="radio"
                name="request"
                value="post"
                onChange={this.handleEventChange}
              />
              <label>POST</label>
              <input
                type="radio"
                name="request"
                value="put"
                onChange={this.handleEventChange}
              />
              <label>PUT</label>
              <input
                type="radio"
                name="request"
                value="delete"
                onChange={this.handleEventChange}
              />
              <label>DELETE</label>
            </div>
            <br />
            <br />
  
            <textarea value={this.state.textArea}>
            </textarea>
          
            <ul className='Results'>
                {
                    this.state.results.map((result, index) => {
                        return <li key={Math.random()}>{result}</li>
                    })
                }
            </ul>
          </form>

      )}
  }
  
  export default Form;


 