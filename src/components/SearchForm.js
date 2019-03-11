import React from 'react';
// WithRouter allows to pass "history" props to a component
import { withRouter } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  /* This function updates the state of Searchform component
  according to value of the search input value*/
  onSearchChange = (event) => {
    this.setState({
      searchText: event.target.value
    });
  }

  /* This function conveys the value of the search input
   field to showImages function which in turn inserts it in
   query tag and sends to Flickr API */
  handleSubmit = (event) => {
    event.preventDefault();
    let query = this.search.value;
    /* Switch loading state to true in order
    to make loading message appear when search query is submitted*/
    this.props.switchLoadingStatus();
    /* Send a request to Flickr API and display images
     according to tag */
    this.props.showPictures(query);
    /* Update gallery title according to tag*/
    this.props.titleValue(query);
    /* Redirect to Search route */
    let path = `/search/${query}`
    this.props.history.push(path);
    /* Make search input field empty again*/
    event.currentTarget.reset();
  }

  render() {
    return(
      <form className="search-form" onSubmit={this.handleSubmit}>
      <input type="search" name="search" placeholder="Search" onChange={this.onSearchChange} ref={(input)=>this.search=input} required />
      <button type="submit" className="search-button">
        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
      </button>
      </form>
    );
  }
}

export default withRouter(SearchForm);
