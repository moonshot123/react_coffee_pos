//버튼 리스트 컴포넌트
import React,{Component} from 'react'
import Drink from './Drink'

class DrinkList extends Component () {
    render(){
        //const drinkList = this.props;
        console.log("drinklist")
        
        const drink = this.props.map( ({name,type,code,price}) => {
            <Drink 
            name={name}
            type={type}
            code={code}
            price={price}
            index = {code}
            />
        } )

        
        return(
            <div>
                {drink}
            </div>
        )
    }
            
}


export default DrinkList