import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        radio: "",
        textArea: "",
        variable: ""
      };
    }
  
    handleEventChange = (event) => {
      const restMethod = event.target.name;
      const requestValue = event.target.value;
      console.log(restMethod, requestValue);
      this.state = this.setState({ [restMethod]: requestValue });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      const textArea = `${this.state.radio} ${this.state.variable}`;
      this.state = this.setState({textArea});
      
    };
  
    render() {
      return (
          <form onSubmit={this.handleSubmit} className='requestForm'>
            <input 
            value={this.state.variable}
            name="variable"
            type="url"
            placeholder="http://www.url.com"
            onChange={this.handleEventChange}
            />
            <button type="submit">Submit</button>
            <br />
            <div className="methodButtons">
              <input
                type="radio"
                name="radio"
                value="get"
                onChange={this.handleEventChange}
              />
              <label>GET</label>
              <input
                type="radio"
                name="radio"
                value="post"
                onChange={this.handleEventChange}
              />
              <label>POST</label>
              <input
                type="radio"
                name="radio"
                value="put"
                onChange={this.handleEventChange}
              />
              <label>PUT</label>
              <input
                type="radio"
                name="radio"
                value="delete"
                onChange={this.handleEventChange}
              />
              <label>DELETE</label>
            </div>
            <br />
            <br />
  
            <textarea value={this.state.textArea}>
              
            </textarea>
          </form>
      )}
  }
  
  export default Form;


 