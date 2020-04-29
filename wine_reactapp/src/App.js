import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Wine1 from './Components/Winedetail';
import './App.css';


class App extends Component {
constructor(props){
  super(props)
  this.state={

    winedata:[],
    picture:[],
    id:[],
    winerender:[],
    name1:" ",
    year:" ",
    grapes:" ",
    cpic:" ",
    price:" ",
    description:" ",
    country:" ",
    region:" ",
    ceate:" "
  }
  this.deletewine=this.deletewine.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleCreate = this.handleCreate.bind(this);

}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value})
  console.log(event.target.name,event.target.value)
}
async getData(){
  try{
const response=await axios.get("https://myapi-profstream.herokuapp.com/api/07dab0/wines");
this.setState({winedata:response.data})
console.log(this.state.winedata)

let elements=this.state.winedata.map((wine,i)=>{

  return(
  <div>

<input type="button" name={wine.id} className="btn" value="X" onClick={this.deletewine}></input>

<Link  to={`/wine`+i}>
  
<img src={wine.picture}/> 

</Link >

 <Route exact path={`/wine`+i} ><Wine1 winedetail={wine}/> </Route> 



</div>)

})
    this.setState({winerender:elements})
  console.log(this.state.winerender)


  }
  catch(error){

  }
}

deletewine=event=>{
console.log("delete entered",event.target.name)
  
    event.preventDefault();

    axios.delete(`https://myapi-profstream.herokuapp.com/api/07dab0/wines/${event.target.name}`)
      .then(res => {
        console.log("deleted event is",res);
        console.log("deleted event is",res.data);
        this.getData();
    })
     
}

handleCreate=event=>{
  console.log("create entered",event.target.name)
  console.log(this.state)
  event.preventDefault();
  
    axios.post('https://myapi-profstream.herokuapp.com/api/07dab0/wines', {
        name: this.state.name1,
        year: this.state.year,
        grapes:this.state.grapes,
        country:this.state.country,
        region:this.state.region,
        description:this.state.description,
        picture:this.state.cpic,
        price:this.state.price
    })
      this.getData();
  }

componentDidMount(){
this.getData();


}  
render(){  
    
  return (
    <div className="wrapper">
     <h1>WineStore</h1> 
    <div className="App">
    
    <Router>
        {this.state.winerender}
    </Router>

      <form id="form1" onSubmit={this.handleChange}>
        
        <label>  
        Name: 
        <br />
        <input name="name1" type="text"  value={this.state.name1} onChange={this.handleChange}/>
        </label>
        <br />

        <label>
        Year:
        <br />
        <input name="year" type="text"  value={this.state.year} onChange={this.handleChange}/>
        </label>
        <br />

        <label> 
        Grapes:
        <br />
        <input name="grapes" type="text"  value={this.state.grapes} onChange={this.handleChange}/>
        </label>
        <br />

        <label> 
        Country:
        <br />
        <input name="country" type="text"  value={this.state.country} onChange={this.handleChange}/>
        </label>
        <br />
          
        <label> 
        Region:
        <br />
        <input name="region" type="text"  value={this.state.region} onChange={this.handleChange}/>
        </label>
        <br />

        <label> 
        Description:
        <br />
        <input name="description" type="text"  value={this.state.description} onChange={this.handleChange}/>
        </label>
        <br />
        
        <label> 
        Picture:
        <br />
        <input name="cpic" type="text"  value={this.state.cpic} onChange={this.handleChange}/>
        </label>
        <br />

        <label>
        Price:
        <br />
        <input name="price" type="text"  value={this.state.price} onChange={this.handleChange}/>
        </label>
        <br />

        <label>
        <br />
        <input id="create" name="create" type="button"  value="Create" onClick={this.handleCreate}/>
        </label>
          
        </form>

    </div>
    </div>

    );
    }
}

 

export default App;
