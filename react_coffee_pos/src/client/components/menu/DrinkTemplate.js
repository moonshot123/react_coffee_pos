import React from 'react'
import DrinkList from './input/DrinkList';
import Output from './output/Output';




const DrinkTemplate = ({drinkList}) => {
    //입력부분 템플릿
   
        console.log("drinkTemplate")
        return(
            <div>
            -음료관련 템플릿-
               
                <div className="list_tep">
                    {drinkList}
                </div>

            
                <div className="output_tep">
                   
                </div>

            </div>
        )     
}

export default DrinkTemplate