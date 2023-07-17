import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export class webRoute extends Component {
    pageSize = 6
    render() {
        return (

            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/home' element={<News key='a' pageSize={this.pageSize} country="us" category='general' />} />
                    <Route exact path='/business' element={<News key='business' pageSize={this.pageSize} country="us" category='Business' />} />
                    <Route exact path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} country="in" category='Entertainment' />} />
                    <Route exact path='/general' element={<News key='general' pageSize={this.pageSize} country="us" category='General' />} />
                    <Route exact path='/health' element={<News key='health' pageSize={this.pageSize} country="us" category='Health' />} />
                    <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country="us" category='Science' />} />
                    <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country="us" category='Sports' />} />
                    <Route exact path='/technology' element={<News key='technology' pageSize={this.pageSize} country="us" category='Technology' />} />
                </Routes>
            </Router>



        )

    }
}
export default webRoute;