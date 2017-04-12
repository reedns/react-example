var SearchForm = React.createClass({
  searchHandler: function() {
    var query = ReactDOM.findDOMNode(this.refs.query).value;
    var self = this;
    $.ajax({
      url: '/api/events',
      data: { query: query },
      success: function(data) {
        self.props.searchHandler(data);
      },
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }
    });
  },

  render: function() {
    return(
      <input onChange={this.searchHandler} type='text' className='form-control' placeholder='Search Events...' ref='query'/>
    )
  }
});
