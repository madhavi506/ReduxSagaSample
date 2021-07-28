import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import sagas from './src/sagas';
import WeatherList from './src/containers/WeatherList';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagas);

function App() {
  return (
    <Provider store={store}>
      <WeatherList />
    </Provider>
  )
}

export default App

