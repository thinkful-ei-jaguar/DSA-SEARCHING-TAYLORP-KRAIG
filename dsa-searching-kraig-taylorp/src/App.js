import React ,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class  App extends Component {

state = {
  submitted: false,
  alert: null,
  counter: 0,
}

 handleSubmit=event=>{
  event.preventDefault()
  this.setState({submitted: true})
  const { text } = event.target
  let startingArr=[89 ,30 ,25 ,32 ,72 ,70 ,51 ,42 ,25 ,24 ,53 ,55 ,78 ,50 ,13 ,40 ,48 ,32 ,26 ,2 ,14 ,33 ,45 ,72 ,56 ,44 ,21, 88 ,27 ,68 ,15 ,62 ,93 ,98, 73, 28, 16 ,46 ,87, 28 ,65 ,38 ,67 ,16 ,85 ,63 ,23 ,69 ,64 ,91 ,9 ,70, 81 ,27, 97 ,82 ,6 ,88 ,3 ,7 ,46 ,13 ,11 ,64 ,76 ,31 ,26 ,38 ,28 ,13 ,17 ,69 ,90, 1, 6, 7, 64, 43 ,9 ,73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51 ,54, 84, 34 ,53 ,78 ,40 ,14, 5]
  const sortedArr = startingArr.sort()
  console.log('text: ', text.value)
  let value = startingArr[this.binarySearch(sortedArr, Number(text.value))]
  if(!value){
    this.setState({alert:`Cannot find value ${text.value}`})
  }
  else{
    this.setState({alert:`Found value ${value} in ${this.state.counter} step(s)`})
  }
  
 }

 binarySearch =(array, value, start, end)=> {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log(start, end);
  if (item === value) {
      return index;
  }
  else if (item < value) {
      this.setState({counter: this.state.counter++})
      return this.binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      this.setState({counter: this.state.counter++})
      return this.binarySearch(array, value, start, index - 1);
  }
};
 

render (){
  const { submitted, alert } = this.state
  
  return (
    <div className="App">
      <header>
       <h1>Searching Algorithms</h1> 
      </header>
       
       <form className="search-form" onSubmit={this.handleSubmit}>
      <textarea name='text'/> <br/><br/>
      {/* <input type="text"/><br/><br/> */}
      <input type="submit"  />
      </form>
      <div role='alert'>
          {submitted && <p>{alert}</p>}
        </div>
    </div>
  );
}

}

export default App;
