var API = 'http://localhost:8050/api/';
var loginAPI = API + 'loginRequest';
var forgotPasswordAPI = API + 'changepassword';
var registerDonorAPI = API + 'donorSignup';
var getAllRecieverAPI = API + 'getAllReciever';
var getLastLoginAPI = API + 'getLastLogin';
var getDonorDataAPI = API + 'getDonor';

function SetUserName(username){
    sessionStorage.setItem("username", username)
}

function GetUserName(){
    return sessionStorage.getItem("username");
}

function RemoveUserName(){
    sessionStorage.removeItem('username')
}

// $('#btn-modal-close').click(()=>{
//     alert('modalclose');
// });

function OpenModal(){
    $('#myModal').removeClass('none');
    $('#myModal').addClass('block');
}

function CloseModal(){
    $('#myModal').removeClass('block');
    $('#myModal').addClass('none');
}

window.onbeforeunload = function (e) { RemoveUserName(); };