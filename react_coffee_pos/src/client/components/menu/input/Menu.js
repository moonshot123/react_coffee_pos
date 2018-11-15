import PropTypes from 'prop-types'
import React from 'react'

//버튼 컴포넌트
const Menu = () => {
    return (
        <div>
            메뉴 
        </div>        
    )

}
Menu.propTypes ={
    name: PropTypes.string,
    type: PropTypes.string,
    price: PropTypes.number,
    code: PropTypes.string
}

export default Menu;
