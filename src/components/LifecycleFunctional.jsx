import { useState, useEffect, useMemo } from 'react';

function LifecycleExample(props) {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);

  // getDerivedStateFromProps equivalent in functional components
  useMemo(() => {
    console.log('getDerivedStateFromProps');
    console.log('props', props);
    console.log('state (test)', test);
    console.log('\n');
    setTest(10); // Simulate state update based on props
  }, [props]);

  // componentDidMount and componentWillUnmount equivalent
  useEffect(() => {
    console.log('componentDidMount');
    console.log('End of mounting phase');
    console.log('\n');

    // This could be your tick function if you decide to use it
    // const timerID = setInterval(() => tick(), 4000);

    // Cleanup in componentWillUnmount
    return () => {
      console.log('componentWillUnmount');
      console.log('End of unmounting phase');
      console.log('\n');
      // clearInterval(timerID); // Cleanup interval if you used it
    };
  }, []); // Empty array means this runs once, like componentDidMount and componentWillUnmount

  // shouldComponentUpdate equivalent using useEffect to simulate re-render conditions
  useEffect(() => {
    console.log('shouldComponentUpdate');
    console.log('props', props);
    console.log('count', count);
    console.log('\n');
    // No return, so it acts like a shouldComponentUpdate deciding factor.
  }, [count, props]); // Re-run when count or props change

  // getSnapshotBeforeUpdate and componentDidUpdate equivalent
  useEffect(() => {
    console.log('componentDidUpdate');
    console.log('count', count);
    console.log('test', test);
    console.log('End of updating phase');
    console.log('\n');

    // Cleanup (simulate getSnapshotBeforeUpdate)
    const snapshot = null; // No snapshot equivalent but could be used to track DOM before update
    console.log('getSnapshotBeforeUpdate');
    console.log('snapshot', snapshot);
    console.log('\n');
  });

  // tick function as regular function, can be triggered manually
  // const tick = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  console.log('Render');
  console.log('\n');

  return (
    <div>
      <p>Hitungan: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default LifecycleExample;
