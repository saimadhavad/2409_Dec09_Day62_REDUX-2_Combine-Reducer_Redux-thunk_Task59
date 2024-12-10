// import logo from './logo.svg';
import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let inputRef = useRef();
  let dispatch = useDispatch();

  let storeObj = useSelector( (storeObj) => {
    console.log(storeObj);
    return storeObj;
  });

  let addActor = () => {
    // console.log("inside the addActor function");
    return () => {dispatch({type:"addActor",data:inputRef.current.value})}    
  }

  return (
    <div className="App">
        <h1 className='headingOne'>REDUX-2</h1>
        <h2 className='headingTwo'>COMBINE REDUCERS,REDUX-THUNK</h2>
        <input type='text' placeholder='Enter ACTOR / CRICKETER / POLITICIAN NAME' ref={inputRef}></input>
      <div className='buttonDiv'>
        <button className='btnGrp'
          onClick={ () => {
            dispatch({type:"addActor",data:inputRef.current.value});
          }}
        >ADD ACTOR</button>   
        <button className='btnGrp'
          onClick={ () => {
            dispatch({type:"addCricketer",data:inputRef.current.value});
          }}
        >ADD CRICKETER</button>  
        <button className='btnGrp'
          onClick={ () => {
            dispatch({type:"addPolitician",data:inputRef.current.value});
          }}
        >ADD POLITICIAN</button> 
        <button className='btnGrp'
          onClick={ () => {
            dispatch(addActor());
          }}
        >ADD ACTOR THRU REDUX_THUNK</button>  
      </div>
      <div>
        <h1>Actor : {storeObj.actorsReducer.actors.join(", ")}</h1>
        <h1>Cricketer : {storeObj.cricketersReducer.cricketers.join(", ")}</h1>
        <h1>Politician : {storeObj.politiciansReducer.politicians.join(", ")}</h1>
      </div>
    </div>
  );
}

export default App;
