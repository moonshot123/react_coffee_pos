import PropTypes from 'prop-types'
import React from 'react'


//버튼 컴포넌트
const Food = (name) => {
    return (
        <div>
            <button value = {name} > </button>
        </div>        
    )

}
Food.propTypes ={
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    code: PropTypes.string
}

export default Food;
