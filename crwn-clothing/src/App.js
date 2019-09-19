import React from 'react';
import {Switch , Route, Link} from 'react-router-dom';

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

// const HomePage = (props) =>{
//     return(<div>
//         <Link to='/topics'>Topics</Link>
//         <button onClick={ ()=>{props.history.push('/topics')}}>history</button>
//         <h1>HOME PAGE</h1>
//     </div>);
// };

const TopicsList = () =>{
    return(<div>
        <h1>TopicsList PAGE</h1>
    </div>);
};

const TopicDetial = (props) =>{
    console.log(props)
    return( <div>
        <h1>TopicDetial PAGE: { props.match.params.topicId}</h1>
    </div>);
};

function App() {
  return (
    <div>
      {/*<HomePage/>*/}
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/topics' component={TopicsList}/>
          <Route path='/topics/:topicId' component={TopicDetial}/>
      </Switch>
    </div>
  );
}

export default App;
