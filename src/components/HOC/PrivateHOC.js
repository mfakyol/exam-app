import React from 'react'
import { Redirect } from 'react-router-dom';

export default function PrivateHOC(WrappedComponent, userType) {
    return function(props) {
          const token = JSON.parse(localStorage.getItem('token'));
          if(token){
              if(token.userType === "I" && userType === "I"){
                return (<WrappedComponent {...props}/>)
              }
              else if(token.userType === "S"  && userType === "S"){
                return (<WrappedComponent {...props}/>)
              }
              else {
                  localStorage.clear('token');
                  return (<Redirect to="/"/>)
              }
          }
            return (<Redirect to="/"/>)
    };
  }
  