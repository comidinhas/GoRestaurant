import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen' 
import RecoverPasswordScreen from './screens/RecoverPasswordScreen'
import SignUpScreen from './screens/SignUpScreen'
import GoRestaurantScreen from './screens/Home/GoRestaurantScreen'
import NewDishesScreen from './screens/NewDishesScreen'


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= { LoginScreen } />
                <Route path='/recoverpassword' component= { RecoverPasswordScreen } />
                <Route path='/singup' component= { SignUpScreen } />
                <Route path='/food' component= { GoRestaurantScreen } />
                <Route path='/newdishes' component= { NewDishesScreen } />
            </Switch>
        </BrowserRouter>
    )
}