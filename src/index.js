import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

let initialStore = {
  actors:[],
  cricketers:[],
  politicians:[]
}

let actorsReducer = (latestStore=initialStore,dispatchedObj) => {
  if(dispatchedObj.type == "addActor"){
    return {...latestStore,actors:latestStore.actors.concat(dispatchedObj.data)};
  }
  return latestStore;
}
let cricketersReducer = (latestStore=initialStore,dispatchedObj) => {
  if(dispatchedObj.type == "addCricketer") {
    return {...latestStore,cricketers:latestStore.cricketers.concat(dispatchedObj.data)};
  }
  return latestStore;
}
let politiciansReducer = (latestStore=initialStore,dispatchedObj) => {
  if(dispatchedObj.type == "addPolitician"){
    return {...latestStore,politicians:latestStore.politicians.concat(dispatchedObj.data)}
  }
  return latestStore;
}

let store = createStore(combineReducers({actorsReducer,cricketersReducer,politiciansReducer}),applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
    <App />
  </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
