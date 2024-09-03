import { useState } from 'react';
// import LifecycleExample from './components/LifecycleFunctional';
import LifecycleExample from './components/Lifecycle';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount LifecycleExample' : 'Mount LifecycleExample'}
      </button>
      {showComponent && <LifecycleExample test="tests" />}
    </div>
  );
}

export default App;
