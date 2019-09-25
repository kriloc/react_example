import React from 'react';
import {Switch , Route } from 'react-router-dom';

import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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

class App extends React.Component{
    constructor(){
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
            // this.setState({ currentUser: user });
            // createUserProfileDocument(user);
            // console.log(user);
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    // console.log(snapshot);
                    this.setState({
                        currentUser:{
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }
                    // ,
                    //     ()=>{
                    //         console.log(this.state);
                    //     }
                    );
                });
            }

            this.setState({currentUser: userAuth});
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                {/*<HomePage/>*/}
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                    <Route exact path='/topics' component={TopicsList}/>
                    <Route path='/topics/:topicId' component={TopicDetial}/>
                </Switch>
            </div>
        );
    }


}

export default App;
