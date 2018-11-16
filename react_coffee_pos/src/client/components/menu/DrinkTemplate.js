import React,{Component} from 'react'
import DrinkList from './input/DrinkList';
import Output from './output/Output';




class MenuTemplate extends Component{
    //입력부분 템플릿
    render(){
        return(
            <div>
            -음료관련 템플릿-
               
                <div className="list_tep">
                    <DrinkList/>
                </div>

            
                <div className="output_tep">
                    <Output />
                </div>

            </div>
        )

    }
     
}

export default MenuTemplate