import React, { Component } from 'react'
import PublicLayoutPage from './PublicLayoutPage'
import '../../helpers/img/home-bg.jpg'
import '../../helpers/css/public-home.css'

 class Home extends Component {
    render() {
        return (
            <div className="home-container">
                Home
            </div>
        )
    }
}

export default PublicLayoutPage(Home)