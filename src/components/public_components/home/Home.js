import React, { Component } from 'react'
import PublicLayoutPage from '../PublicLayoutPage'
import Auth from './Auth'
import '../../../helpers/css/public-home.css'

 class Home extends Component {
    render() {
        return (
            <div className="public-home-container">
                <h1 className="public-slogan">Eğitmenler için<br></br> Online Sınav Sistemi</h1>
                <Auth/>
            </div>
        )
    }
}

export default PublicLayoutPage(Home)