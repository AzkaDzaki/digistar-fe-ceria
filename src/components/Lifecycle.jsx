import React from 'react';
class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      test: 0,
    };
    console.log('Constructor');
    console.log('\n');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps', nextProps);
    console.log('prevState', prevState);
    console.log('\n');
    return { test: 10 };
  }

  componentDidMount() {
    console.log('componentDidMount');
    console.log('End of mounting phase');
    console.log('\n');
    // this.timerID = setInterval(() => this.tick(), 4000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log('nextProps', nextProps);
    console.log('nextState', nextState);
    console.log('this.state.count', this.state.count);
    console.log('\n');
    return nextState.count !== this.state.count;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('\n');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('snapshot', snapshot);
    console.log('End of updating phase');
    console.log('\n');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log('End of unmounting phase');
    console.log('\n');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    console.log('Render');
    console.log('\n');

    return (
      <div>
        <p>Hitungan: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Tambah
        </button>
      </div>
    );
  }
}

export default LifecycleExample;
