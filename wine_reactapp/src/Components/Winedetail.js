import React,{Component} from 'react';

export default function Wine1(props)
{
  console.log(wine);
    var wine=[];
    wine=props.winedetail;
    if(wine===undefined)
    return;
    else
    return(
        <div key={wine["id"]} className="wine" tabIndex="1" >
          <h4>{wine["name"]} ({wine["year"]})</h4>
          <h4>{wine["grapes"]}</h4>
          <h4>{wine["country"], wine["region"]}</h4>
          <p>{wine["description"]}</p>
        </div>  
    );
}
