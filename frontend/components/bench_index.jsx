import React from 'react';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const items = this.props.benches.map(bench => {
      return <li key={bench.id}>{bench.description}</li>
    })
    return (
      <div>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
};

export default BenchIndex;