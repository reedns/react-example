var NewForm = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      name: '',
      place: '',
      event_date: '',
      description: ''
    }
  },

  handleAdd: function(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/events',
        method: 'POST',
        data: { event: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.setState(self.getInitialState());
        },
        error: function(xhr, status, error) {
          alert('Cannnot not add new record: ', error);
        }
      })
    } else {
      alert('Please Fill in All Fields.');
    }
  },

  validForm: function() {
    if (this.state.name && this.state.place && this.state.event_date && this.state.description) {
      return true;
    } else {
      console.log(this.state.name && this.state.place && this.state.event_date && this.state.description);
      return false;
    }
  },

  handleChange: function(e) {
    var inputName = e.target.name;
    var value = e.target.value;
    this.setState({ [inputName]: value });
  },

  render: function() {
    return(
      <form className='form-inline' onSubmit={this.handleAdd}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            name='name'
            ref='name'
            value={this.state.name}
            onChange={this.handleChange} />
          <input
            type='text'
            className='form-control'
            placeholder='Place'
            name='place'
            ref='place'
            value={this.state.place}
            onChange={this.handleChange} />
          <input
            type='text'
            className='form-control'
            placeholder='Event Date'
            name='event_date'
            ref='event_date'
            value={this.state.event_date}
            onChange={this.handleChange} />
          <input
            type='text'
            className='form-control'
            placeholder='Description'
            name='description'
            ref='description'
            value={this.state.description}
            onChange={this.handleChange} />
          <button type='submit' className='btn btn-sm btn-primary'>Add</button>
        </div>
      </form>
    )
  }
})
