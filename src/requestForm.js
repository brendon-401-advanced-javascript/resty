import React from 'react';
import superagent from 'superagent';
import ReactJson from 'react-json-view';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fetching: false,
        request: "",
        textArea: "",
        url: "",
        headers:[],
        response:[],
      };
    }
  
    handleEventChange = (event) => {
      const restMethod = event.target.name;
      const requestValue = event.target.value;
      // console.log(restMethod, requestValue);
      this.setState({ [restMethod]: requestValue });
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const textArea = `${this.state.request} ${this.state.url}`;
      this.setState({textArea});
      const response = await superagent[this.state.request](this.state.url);
      const results = response.body || [];
      const headers = response.headers || [];
      this.setState({response:results, headers:headers, fetching:false});
      // this.setState({headers:headers});
      // console.log(this.state);
    }

    

  
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
              {this.state.fetching ? <div> Just A Sec....</div> : '' }

            <section className='Response'>
              <h2>Headers</h2>
              <ReactJson src={this.state.headers}/>
              <h2>Body</h2>
              <ReactJson src={this.state.response}/>
            </section>
          
            
          </form>
      )}
  }
  // console.log(this);
  export default Form;


 