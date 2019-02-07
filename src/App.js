import React, { Component } from 'react';

import './App.css';
// import Grid from '@material-ui/core/Grid'

import Form from './components/Form'
import Data from './components/Data'
import Heading from './components/Heading'
const api_key = 'dac9389281dc4d4a8489f8207bd9e649'

class App extends Component {
  state = {
    Author: null,
    Title: null,
    Description: null,
    Imageurl: null,
    Publishedat: null,
    Content: null,
    Count: null
     }


     fetchNews = async (event) => {
      event.preventDefault()
      console.log(this.state)
  
      const country = event.target.elements.countryname.value
  
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`
  
      const api_call = await fetch(url)
  
      const data = await api_call.json()

      console.log('hey',data);
  

      if (country && data.cod !== '404') {
        const noa = data.totalResults
        console.log("the value is",noa)
        this.setState({
          Author: data.articles[0].author,
          Title: data.articles[0].title,
          Description: data.articles[0].description,
          Imageurl: data.articles[0].urlToImage,
          Publishedat: data.articles[0].publishedAt,
          Content: data.articles[0].content,
          error: ''
        })
      }  else {
        this.setState({
          Author: null,
          Title: null,
          Description: null,
          Imageurl: null,
          Publishedat: null,
          Content: null,
          error: 'Please fill in the form fields'
        })
      }
    }

 
 
 
  render() { 
    return (
   
    
  <div className='wrapper'>
  <Heading/>

<Form
    fetchNews={this.fetchNews}/>

<Data
                // Author={this.state.data.articles[0].author}
                Title={this.state.Title}
                Description={this.state.Description}
                Imageurl={this.state.Imageurl}
                Publishedat={this.state.Publishedat}
                Content={this.state.Content}
                error={this.state.error}
              />
  </div> 
  

    );
  }
}

export default App;