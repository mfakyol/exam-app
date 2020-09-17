import React, { Component } from 'react'
import PrivateHOC from '../../HOC/PrivateHOC'

class InstructorHome extends Component {
    render() {
        return (
            <div>
                Instructor Home
            </div>
        )
    }
}
export default PrivateHOC(InstructorHome, "I")