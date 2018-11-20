import React, { Component } from 'react';
import './app.css';
import {BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import FoodTemplate from "./components/menu/FoodTemplate"
import DrinkTemplate from "./components/menu/DrinkTemplate"
import SellTemplate from './components/sell/SellTemplate';
import DrinkList from './components/menu/input/DrinkList'

export default class App extends Component (){
  state = { 
    total:0,
  
    DrinkDB : [
      {name : "아메리카노", price: 4100, code: "am" },
      {name : "그린티라떼", price: 5600, code: "green"},
      {name : "카푸치노", price: 5100, code: "ca"}
    ],
  
    FoodDB : [
      {name : "샌드위치", price : 5500, code: "sn"},
      {name : "티라미수", price : 6000, code: "tr"},
      {name : "베이글", price : 3500, code: "bg"}
    ],
  
    SalesDB : [
      {name : "아메리카노", price: 4100, code:"am", date:"20181116", time:"160000" },
      {name : "그린티라떼", price: 5600, code: "green", date:"20181116", time:"160000" },
      {name : "아메리카노", price: 4100, code:"am", date:"20181116", time:"160000" },
      {name : "샌드위치", price : 5500, code: "sn", date:"20181116", time:"160000" },
      {name : "카푸치노", price: 5100, code: "ca", date:"20181116", time:"160000" },
      {name : "아메리카노", price: 4100, code:"am", date:"20181116", time:"160000" },
      {name : "베이글", price : 3500, code: "bg", date:"20181116", time:"160000" },
      {name : "아메리카노", price: 4100, code:"am", date:"20181116", time:"160000" }
    ]
  };


/*
  _foodhandler(){
    console.log("식품핸들러")
    const FoodDB = this.state.FoodDB.map( food => {
      return (
        <FoodTemplate 
          name = {food.name}
          price = {food.price}
          code = {food.code}
          key = {food.code}
        />
      )
      
    })

    return FoodDB
  }

  //매출핸들러
  _saleshandler (){
    console.log("매출 핸들러 이동")
    const SalesDB = this.state.SalesDB.map( sales => {
      return(
        <SellTemplate 
        name = {sales.name}
        price = {sales.price}
        code = {sales.code} 
        date = {sales.date} 
        time = {sales.time}
        />
      )
      
    }) 
  
    return SalesDB  
  }

  _totalhandler() {

  }
*/

  componentDidMount() {
   
  }

  render() {
    const DrinkDB = this.state.DrinkDB
   
    console.log("rendering start")
    return (
      <div>
        
         <Router>
          <div>
          <div>
            <Link to="/drink" > <button type="button" className="" >메뉴1</button> </Link>
            <Link to="/food" > <button type="button" className="" >메뉴2</button> </Link>
            <Link to="/sales" > <button type="button" className="">매출정보</button> </Link>         
          </div>
          
          <div>
            <Route exact path='/drink' component={
              <DrinkTemplate drinkList={(
                <DrinkList
                name = {DrinkDB.name}
                price = {DrinkDB.price}
                code = {DrinkDB.code}
                key = {DrinkDB.code}
                />
              )}>
              </DrinkTemplate>} />

            <Route path='/food'component={FoodTemplate}/>
            <Route path='/sales'component={SellTemplate }/>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}
