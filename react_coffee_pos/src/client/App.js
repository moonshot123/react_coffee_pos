import React, { Component } from 'react';
import './app.css';
import Sell from "./components/sell/SellTemplate"
import {BrowserRouter  as Router, Route, Link } from 'react-router-dom';
import FoodTemplate from "./components/menu/FoodTemplate"
import DrinkTemplate from "./components/menu/DrinkTemplate"
import SellTemplate from './components/sell/SellTemplate';
import Output from './components/menu/output/Output';

export default class App extends Component {
  state = { 
    username: null ,
    total:0,
  
    DrinkDB : [
      {name : 아메리카노, price: 4100, code: am },
      {name : 그린티라떼, price: 5600, code: green},
      {name : 카푸치노, price: 5100, code: ca}
    ],
  
    FoodDB : [
      {name : 샌드위치, price : 5500, code: sn},
      {name : 티라미수, price : 6000, code: tr},
      {name : 베이글, price : 3500, code: bg}
    ],
  
    SalesDB : [
      {name : 아메리카노, price: 4100, code:am, date:20181116, time:160000 },
      {name : 그린티라떼, price: 5600, code: green, date:20181116, time:160000 },
      {name : 아메리카노, price: 4100, code:am, date:20181116, time:160000 },
      {name : 샌드위치, price : 5500, code: sn, date:20181116, time:160000 },
      {name : 카푸치노, price: 5100, code: ca, date:20181116, time:160000 },
      {name : 아메리카노, price: 4100, code:am, date:20181116, time:160000 },
      {name : 베이글, price : 3500, code: bg, date:20181116, time:160000 },
      {name : 아메리카노, price: 4100, code:am, date:20181116, time:160000 }
    ]

  };


  _drinkhandler(){
    console.log("음료 핸들러 이동")
    const DrinkDB = this.state.DrinkDB.map( drink => {
      return(
        <DrinkTemplate drinkList={(
          <DrinkList
          name = {drink.name}
          price = {drink.price}
          code = {drink.code}
          key = {drink.code}
          />
        )}   
        />
        )
    })
    return DrinkDB    
  }

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
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    console.log("시작")
    const { username } = this.state.username;
    const { total } = this.state.total;
    const { DrinkDB } =this.state.DrinkDB
    const { FoodDB } =this.state.FoodDB
    const { SalesDB } =this.state.SalesDB


    return (
      <div>
            {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          
         <Router>
          <div>
          <div>
            <Link to="/drink" > <button type="button" className="" onClick={this._drinkhandler}>메뉴1</button> </Link>
            <Link to="/food" > <button type="button" className="" onClick={this._foodhandler}>메뉴2</button> </Link>
            <Link to="/sales" > <button type="button" className=""onClick={this._saleshandler}>매출정보</button> </Link>         
          </div>
          <div>
            <Route exact path='/drink' component={Drink}/>
            <Route path='/food'component={Food}/>
            <Route path='/sales'component={Sell}/>
          </div>
          </div>
        </Router>
      </div>
    );
  }
}
