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