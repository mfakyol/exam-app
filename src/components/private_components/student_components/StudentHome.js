import React, { Component } from 'react'
import PrivateHOC from '../../HOC/PrivateHOC'
 class StudentHome extends Component {
    render() {
        return (
            <div>
               <h1>Student Home</h1>
            </div>
        )
    }
}

export default PrivateHOC(StudentHome, "S")