import React,{Component} from 'react'
import MenuList from './input/MenuList';
import Option from './input/Option';
import Output from './output/Output';

class MenuTemplate extends Component{
    //입력부분 템플릿
    render(){
        return(
            <div>
            -입력 부분 템플릿-


                <div className="menulist_tep">

                    <MenuList />
                </div>

                <div className="option_tep">
                    <Option />
                </div>

                <div className="output_tep">
                    <Output />
                </div>


            </div>
        )

    }
     
}



export default MenuTemplate