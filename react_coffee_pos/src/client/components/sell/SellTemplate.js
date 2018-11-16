import React from 'react'
import SellList from './SellList';
import SellOutput from './SellOutput';

export default SellTemplate = ({name,price, code, date, time}) => {

        return(
            <div>
                매출정보템플릿컴포넌트
                {SalesDB}
                
                <SellList />
                <SellOutput />
            </div>
        )

}