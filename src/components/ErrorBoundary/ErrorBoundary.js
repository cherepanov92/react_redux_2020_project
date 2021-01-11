import React, { useEffect, useState } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
      stack: null,
      message: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { 
      hasError: true,
      stack: error.stack,
      message: error.message,
    };
  }

  componentDidCatch(error, errorInfo) {
    // console.log(1, error, 2, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Упс произошла ошибка..</h1>
          <button onClick={() => window.location.reload()}>Перезагрузить страницу</button>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;