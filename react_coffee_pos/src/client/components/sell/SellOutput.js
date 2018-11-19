//매출액 컴포넌트
import PropTypes from 'prop-types'
import React from 'react'

const SellOutput = (total) => {
    return(
        <div>
            매출액 컴포넌트
            {total}            
        </div>
    )

}

SellOutput.prototype ={
    total : PropTypes.number
}


export default SellOutput