import React from 'react';
import './App.css';






class LoginControl extends React.Component  {
    constructor(props){
        super(props);
this.hendleLoginClick=this.hendleLoginClick.bind(this);
this.hendleLogoutClick=this.hendleLogoutClick.bind(this);
this.state={isLoggedIn:false};
}
hendleLoginClick(){
    this.setState({isLoggedIn:true})
}
hendleLogoutClick(){
    this.setState({isLoggedIn:false})
}
render(){
const isLoggedIn = this.state.isLoggedIn;
let button ;
if(isLoggedIn){
    button = <LogoutButton onClick = {this.hendleLogoutClick}/>
}else{
    button = <LoginButton onClick = {this.hendleLoginClick}/> 
}
return(
    <div>
        <Greting isLoggedIn={isLoggedIn}/>
        {button}
    </div>
)


}

}

function UserGreeting(props){
    return<h1>You welcom beack</h1>
}
function Guestreeting(props){
    return<h1>Plias register</h1>
}
function Greting (props){
const isLoggedIn = props.isLoggedIn;
if(isLoggedIn){
    return<UserGreeting/>
}
return<Guestreeting/>
}


function LoginButton(props){
    return(
        <button onClick={props.onClick}>ENTER</button>
    );
}
function LogoutButton(props){
    return(
        <button onClick={props.onClick}>EXIT</button>
    )
}

export default LoginControl;
