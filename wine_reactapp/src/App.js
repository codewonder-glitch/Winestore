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
    picture:[],
    id:[]
  }
  this.deletewine=this.deletewine.bind(this);
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

deletewine=event=>{
console.log("delete entered",event.target.name)
  
    event.preventDefault();

    axios.delete(`https://myapi-profstream.herokuapp.com/api/07dab0/wines/${event.target.name}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      this.getData();
}

getPictures(){
  let pic=[];
  let ids=[];
for(let i=0;i<=this.state.winedata.length;i++){
pic.push(this.state.winedata[i].picture);
ids.push(this.state.winedata[i].id);
this.setState({picture:pic});
this.setState({id:ids});


}

}

componentDidMount(){
this.getData();


}  
render(){
  return (
  
    
      <Router>
            <h1 > WineStore </h1>
        <div className="App">
        
     <div>
     
        <Link  to="/wine1">
<img src={this.state.picture[0]}/> 

</Link >
<input type="button" name={this.state.id[0]} className="btn" value="X" onClick={this.deletewine}></input>
<Route exact path="/wine1"><Wine1 winedetail={this.state.winedata} /></Route> 

</div>




<div>
 <Link to="/wine2">
<img src={this.state.picture[1]}/>   
</Link >
<input type="button" name={this.state.id[1]} className="btn" value="X" onClick={this.deletewine}></input>
<Route exact path="/wine2"><Wine2 winedetail={this.state.winedata} /></Route> 
</div>
<div>
<Link to="/wine1">
<img src={this.state.picture[2]}/>   
</Link>
<input type="button" name={this.state.id[2]} className="btn" value="X" onClick={this.deletewine}></input>
</div>
<div>
<Link to="/wine1">

<img src={this.state.picture[3]}/>  
</Link>
<input type="button" name={this.state.id[3]} className="btn" value="X" onClick={this.deletewine}></input>
</div>
<div>
<Link to="/wine1">
<img src={this.state.picture[4]}/>    
</Link>
<input type="button" name={this.state.id[4]} className="btn" value="X" onClick={this.deletewine}></input>
</div>
<div>
<Link to="/wine1">
<img src={this.state.picture[5]}/> 
</Link>
<input type="button" name={this.state.id[5]} className="btn" value="X" onClick={this.deletewine}></input>
</div>
<div>
<Link to="/wine1">
<img src={this.state.picture[6]}/> 
</Link>
<input type="button" name={this.state.id[6]} className="btn" value="X" onClick={this.deletewine}></input>
</div>
<div>
<Link to="/wine1">   
<img src={this.state.picture[7]}/> 
</Link>  
<input type="button" name={this.state.id[7]} className="btn" value="X" onClick={this.deletewine}></input> 
</div>




</div>
</Router>   
   
  );
}
}

 function Wine2(props)
{
    var wine=[];
    wine=props.winedetail[1];
    if(wine===undefined)
    return;
    console.log(wine);
    return(
        <div key={wine["id"]} className="wine" tabIndex="1" >
          <h4>{wine["name"]} ({wine["year"]})</h4>
          <h4>{wine["grapes"]}</h4>
          <h4>{wine["country"], wine["region"]}</h4>
          <p>{wine["description"]}</p>
        </div>  
    );
}


export default App;
