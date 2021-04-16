var API = 'http://localhost:8050/api/';
var loginAPI = API + 'loginRequest';
var forgotPasswordAPI = API + 'changepassword';
var registerDonorAPI = API + 'donorSignup';
var getAllRecieverAPI = API + 'getAllReciever';
var getLastLoginAPI = API + 'getLastLogin';
var getDonorDataAPI = API + 'getDonor';
var updateDonorDataAPI = API + 'updateDonor';
var  giveDonationAPI = API + 'giveDonation';
var  newRecieverAPI = API + 'newReciever';
var  deleteRecieverAPI = API + 'deleteReciever';
var  getDonationAPI = API + 'getallDonation';
var  getDataDonationAPI = API + 'getDonationData';
var  getMonthDonationAPI = API + 'getDonationDataMonth';
var  getYearDonationAPI = API + 'getDonationDataYear';


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

function OpenModal(message = '',title = ''){
    $('#myModal').removeClass('displaynone');
    $('#myModal').addClass('displayblock');
    $('#id-modal-title').empty();
    $('#id-modal-title').append(title);
    $('#id-modal-msg').empty();
    $('#id-modal-msg').append(message);
    if(!$('#id-modalfooter').hasClass('hidden')){
        $('#id-modalfooter').addClass('hidden')
    }
}

function CloseModal(){
    $('#myModal').removeClass('displayblock');
    $('#myModal').addClass('displaynone');
    if(!$('#id-modalfooter').hasClass('hidden')){
        $('#id-modalfooter').addClass('hidden')
    }
}

function OpenConfirmation(message = '',title = '',Yeslbl = 'Yes',Nolbl = 'No'){
    $('#myModal').removeClass('displaynone');
    $('#myModal').addClass('displayblock');
    $('#id-modal-title').empty();
    $('#id-modal-title').append(title);
    $('#id-modal-msg').empty();
    $('#id-modal-msg').append(message);
    $('#id-modalfooter').removeClass('hidden');
    $('#id-modalNo').text(Nolbl);
    $('#id-modalYes').text(Yeslbl);
}

window.onbeforeunload = function (e) { RemoveUserName(); };