import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchWeatherData() {
  const json = yield fetch('https://goweather.herokuapp.com/weather/Curitiba')
      .then(response => response.json(),);   
   yield put({ type: "GET_WEATHER_DATA", action: json }); 
}
function* actionWatcher() {
     yield takeLatest('FETCH_WEATHER_DATA', fetchWeatherData)
}
export default function* sagas() {
   yield all([
   actionWatcher(),
   ]);
}
