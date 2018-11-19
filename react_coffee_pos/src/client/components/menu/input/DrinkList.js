//버튼 리스트 컴포넌트
import React,{Component} from 'react'
import Drink from './Drink'

class DrinkList extends Component () {
    return(){
        const drinkList = this.props;
        
        
        return(
            <div>
                <Drink name = {drinkList.name}/>
            </div>
        )
    }
            
}


export default DrinkList