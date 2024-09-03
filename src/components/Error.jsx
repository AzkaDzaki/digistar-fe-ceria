// OVERRIDE App.jsx with this file

/* eslint-disable react/prop-types */
import React from 'react';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info);
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

class MyComponent extends React.Component {
  render() {
    if (this.props.throwError) {
      throw new Error('This is a test error!');
    }
    return <div>No error</div>;
  }
}

function App() {
  const [throwError, setThrowError] = React.useState(false);

  return (
    <ErrorBoundary>
      <button onClick={() => setThrowError(true)}>Trigger Error</button>
      <MyComponent throwError={throwError} />
    </ErrorBoundary>
  );
}

export default App;
