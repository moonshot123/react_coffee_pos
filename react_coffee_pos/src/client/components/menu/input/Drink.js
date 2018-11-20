import PropTypes from 'prop-types'
import React from 'react'


//버튼 컴포넌트
const Drink = ({name,type,code,price}) => {
    return (
        <div>
            <button value={code} > {name}{type}{price} </button>
        </div>        
    )

}
Drink.propTypes ={
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    code: PropTypes.string
}

export default Drink;
