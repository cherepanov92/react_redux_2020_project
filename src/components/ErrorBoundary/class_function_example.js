import React, { useEffect, useState } from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 1,
    }

    // Бинд функции, дабы не терять контекст при использовании onClick={this.setNewValue}
    this.setNewValue = this.setNewValue.bind(this);
  }

  // Выполняется при первичном рендере
  componentDidMount() {
    console.log('componentDidMount один раз');
    // 1. Подписываемся на событие скроллинга
    document.body.addEventListener('scroll', this.onScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      console.log('componentDidUpdate при изменении "value"');
    }
  }

  componentWillUnmount() {
    // 1. Отписываемся от события скроллинга
    document.body.removeEventListener('scroll', this.onScroll);
  }

  setNewValue() {
    this.setState({value:this.state.value +1});
  }

  onScroll() {
    console.log('scroll');
  }

  render() {
    return (
      <div>
        <h1>Классовый привет, {this.state.value}</h1>
        <button onClick={this.setNewValue}>Нажми меня</button>
      </div>
    )
  }
}

const ErrorB = () => {
  const [value, setValue] = useState(1);
  const setNewValue = () => {setValue(value + 1)};
  const onScroll = () => console.log('scroll');

  // Выполняется при изменении значений в списке
  // в данном случае выполняется при первичном рендере
  useEffect(() => {
    console.log('use effect один раз');
  }, []);

  // Выполняется при каждом перерендере значения 'value'
  useEffect(() => {
    console.log('use effect при изменении "value"');
  }, [value]);

  useEffect(() => {
    // Подписываемся на событие скроллинга
    document.body.addEventListener('scroll', onScroll);
    // Отписываемся от события скроллинга
    return () => {
      document.body.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div>
      <h1>Функциональный привет, {value}</h1>
      <button onClick={setNewValue}>Нажми меня</button>
    </div>
  )
};

export default ErrorBoundary;