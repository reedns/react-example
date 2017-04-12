var EventTable = React.createClass({
  render: function() {
    var events = [];
    this.props.events.forEach(function(e) {
      events.push(<Event event={e} key={'event' + e.id}/>);
    }.bind(this));
    return(
      <table className='table table-striped'>
        <thead>
          <tr>
            <th className='col-md-3'>Name</th>
            <th className='col-md-2'>Date</th>
            <th className='col-md-3'>Place</th>
            <th className='col-md-4'>Description</th>
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </table>
    )
  }
});
