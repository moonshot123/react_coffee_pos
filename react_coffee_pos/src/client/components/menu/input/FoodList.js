//버튼 리스트 컴포넌트
import React,{Component} from 'react'
import Food from './Food'

class FoodList extends Component () {
    return(){
        const FoodList = this.props;
        
        
        return(
            <div>
                <Food name = {FoodList.name}/>
            </div>
        )
    }
            
}


export default FoodList