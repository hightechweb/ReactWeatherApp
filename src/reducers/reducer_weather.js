import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // console.log('Action received', action);

  // handle only FETCH_WEATHER action type with switch statements
  switch (action.type) {
  case FETCH_WEATHER:
    // handle payload
    // return state.push(action.payload.data); => never manipulate state directly!!!!! ERROR!!!

    // return state.concat([action.payload.data]); => vanilla JS => NOT [ city, [city, city] ]
    return [ action.payload.data, ...state ]; // ES6 Style => [ city, city, city ] GOOOD!
  }
  return state;
}
