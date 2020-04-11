import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Wine1 from './Components/Wine1'

class App extends Component {
constructor(props){
  super(props)
  this.state={

    winedata:[],
    picture:[]
  }
  
}

async getData(){
  try{
const response=await axios.get("https://myapi-profstream.herokuapp.com/api/07dab0/wines");
this.setState({winedata:response.data})
console.log(this.state.winedata)
this.getPictures();
  }
  catch(error){

  }
}

getPictures(){
  let pic=[];
for(let i=0;i<=this.state.winedata.length;i++){
pic.push(this.state.winedata[i].picture);
this.setState({picture:pic})

}

}

componentDidMount(){
this.getData();


}  
render(){
  return (
    
      <Router>
        <div className="App">
        <Link  to="/wine1">
<img src={this.state.picture[0]}/> 
</Link >
<Route exact path="/wine1"><Wine1 winedetail={this.state.winedata} /></Route> 


 
 <Link to="/wine1">
<img src={this.state.picture[1]}/>   
</Link >

<Link to="/wine1">
<img src={this.state.picture[2]}/>   
</Link>
<Link to="/wine1">

<img src={this.state.picture[3]}/>  
</Link>
<Link to="/wine1">
<img src={this.state.picture[4]}/>    
</Link>
<Link to="/wine1">
<img src={this.state.picture[5]}/> 
</Link>
<Link to="/wine1">
<img src={this.state.picture[6]}/> 
</Link>
<Link to="/wine1">   
<img src={this.state.picture[7]}/> 
</Link>   

<Route exact path="/wine1"><Wine1 winedetail={this.state.winedata} /></Route>


</div>
</Router>   
   
  );
}
}

export default App;
