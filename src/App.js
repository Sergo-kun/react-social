
import './App.css';
import  Nav from "./components/Nav/Nav";
import React from "react";
import  {withRouter,Route, BrowserRouter} from "react-router-dom"
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import FriendsContainer from "./components/Friends/FriendsContainer";

//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component{
    componentDidMount() {
    this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    {/*<Fon/>*/}

                    <Nav/>
                    <div>

                        <Route render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>

                        }
                        } path="/messages"/>
                        <Route render={() => <FriendsContainer/>} path="/friends"/>
                        <Route render={() => <UsersContainer/>} path="/users"/>

                        <Route render={withSuspense(ProfileContainer)}
                         path="/profile/:userId?"/>
                        <Route component={Music} path="/music"/>
                        <Route component={News} path="/news"/>
                        <Route component={Settings} path="/settings"/>
                        <Route component={Login} path="/login"/>

                    </div>
                    {/*<Profile/>*/}


                </div>
            </BrowserRouter>
        );
    }
}
const mapStateTooProps = (state) => {
    return{
        initialized : state.app.initialized
    }
}

let AppContainer = compose(
    connect(mapStateTooProps, {initializeApp})(App));

let AppReactSamurai = (props) => {
    return <React.StrictMode>
                <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
    </React.StrictMode>


}
export default AppReactSamurai