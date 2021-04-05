var API = 'http://localhost:3987/';
var loginAPI = API + 'logincheck';
var forgotPasswordAPI = API + 'UpdatePassword';
var registerDonor = API + 'register';
var getAllReciever = API + '/getAllReciever';
var getLastLogin = API + '/getLastLogin';

function SetUserName(username){
    sessionStorage.setItem("username", username)
}

function GetUserName(){
    return sessionStorage.getItem("username");
}

function RemoveUserName(){
    sessionStorage.removeItem('username')
}

window.onbeforeunload = function (e) { RemoveUserName(); };