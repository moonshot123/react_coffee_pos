//매출정보컴포넌트
import PropTypes from 'prop-types';


//name, price: 4100, code:am, date:20181116, time:160000
const Sell = () => {
    return(
        <div>
        매출    
            <Sell />
        </div>
    )
}


Sell.propTypes = {
    name : PropTypes.string,
    price : PropTypes.number,
    code: PropTypes.string,
    date : PropTypes.string,
    time : PropTypes.string
}

export default Sell