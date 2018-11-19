import React from 'react'
import DrinkList from './input/DrinkList';
import Output from './output/Output';




const DrinkTemplate = (drinkList) =>{
    //입력부분 템플릿
    console.log(drinkList);

        return(
            <div>
            -음료관련 템플릿-
               
                <div className="list_tep">
                    <DrinkList drinkList={drinkList} />
                </div>

            
                <div className="output_tep">
                    <Output />
                </div>

            </div>
        )     
}

export default DrinkTemplate