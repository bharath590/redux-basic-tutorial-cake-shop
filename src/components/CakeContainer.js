import React from 'react'
import { buyCake } from '../redux/cake/cakeAction'
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>no of cakes -{props.noOfCakes}</h2>
            <button onClick={props.buyCake}>buy cake</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        noOfCakes: state.noOfCakes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
