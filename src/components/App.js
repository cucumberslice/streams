import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (   
        <div>
            PageONe
            <Link to='/pageTwo'>Navigate to page PageTwo</Link>
        </div>)
}


const PageTwo = () => {
    return <div>
                PageTwo
                <button>click Me</button>
                <Link to='/'>Navigate to page PageOne</Link>

            </div>
}
const App = () => {

    return (
        <div>
           <BrowserRouter>
                <Route path="/" exact component={PageOne}/>
                <Route path='/pageTwo' component={PageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App
