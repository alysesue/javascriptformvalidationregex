//store form info in array and return - global var
var userid = new Array();
var passid = new Array();
var username = new Array();
var address = new Array();
var country = new Array();
var zip = new Array();
var email = new Array();
var usecase = new Array();
var newsletter = Array();
var datepicker = new Array();

//form validation	
function formValidation()
{  
	var uid = document.registration.userid;  
	var passid = document.registration.passid;  
	var uname = document.registration.username;  
	var uadd = document.registration.address;  
	var ucountry = document.registration.country;  
	var uzip = document.registration.zip;  
	var uemail = document.registration.email;  
	var uusebusiness = document.registration.usebusiness;  
	var uuseeducation = document.registration.useeducation; 
	var uusehobby = document.registration.usehobby; 
	var nyes = document.registration.newsletteryes;
	var nno = document.registration.newsletterno;
	var udate = document.registration.datepicker;

	if(userid_validation(uid,5,12))  
	{  
		if(passid_validation(passid,7,12))  
		{  
			if(allLetter(uname))  
			{  
				if(alphanumeric(uadd))  
				{   
					if(countryselect(ucountry))  
					{  
						if(allnumeric(uzip))  
						{  
							if(ValidateEmail(uemail))  
							{  
								if(validUse(uusebusiness,uuseeducation,uusehobby))  
								{ 
									if(validNewsletter(nyes,nno))  
									{ 
										if(validDate(udate))  
										{ 

										} 
									} 
								}  
							}   
						}  
					}   
				}  
			}  
		}  
	}  
	return false;  
	document.getElementById('registration').submit();
} 

function userid_validation(uid,mx,my)  
{  
	var uid_len = uid.value.length;  
	if (uid_len == 0 || uid_len >= my || uid_len < mx)  
	{  
	alert("User Id should not be empty / length be between "+mx+" to "+my);  
	uid.focus();  
	return false;  
	}  
	return true;  
}  

function passid_validation(passid,mx,my)  
{  
	var passid_len = passid.value.length;  
	if (passid_len == 0 ||passid_len >= my || passid_len < mx)  
	{  
	alert("Password should not be empty / length be between "+mx+" to "+my);  
	passid.focus();  
	return false;  
	}  
	return true;  
}

function allLetter(uname)  
{   
	var letters = /^[A-Za-z_ ]+$/;
	if(uname.value.match(letters))  
	{  
	return true;  
	}  
	else  
	{  
	alert('Username must contain alphabetical characters only');  
	uname.focus();  
	return false;  
	}  
}  

function alphanumeric(uadd)  
{   
	var letters = /^[0-9a-zA-Z_ ]+$/; 
	if(uadd.value.match(letters))  
	{  
	return true;  
	}  
	else  
	{  
	alert('User address must have alphanumeric characters only');  
	uadd.focus();  
	return false;  
	}  
}
	
function countryselect(ucountry)  
{  
	if(ucountry.value == "Default")  
	{  
	alert('Select your country from the list');  
	ucountry.focus();  
	return false;  
	}  
	else  
	{  
	return true;  
	}  
} 
 
function allnumeric(uzip)  
{   
	var numbers = /^[0-9]+$/;  
	if(uzip.value.match(numbers))  
	{  
	return true;  
	}  
	else  
	{  
	alert('Post Code/Zip code must have numeric characters only');  
	uzip.focus();  
	return false;  
	}  
}  

function ValidateEmail(uemail)  
	{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{  
	return true;  
	}  
	else  
	{  
	alert("You have entered an invalid email address");  
	uemail.focus();  
	return false;  
	}  
} 

function validUse(uusebusiness,uuseeducation,uusehobby)  
{  
	x=0;  
	  
	if(uusebusiness.checked)   
	{  
	x++;  
	} if(uuseeducation.checked)  
	{  
	x++;   
	} if(uusehobby.checked)  
	{  
	x++;   
	}   
	if(x==0)  
	{  
	alert('Select main purpose');  
	uusebusiness.focus();  
	return false;  
	} 
	else
	{
	return true;
	}
}
	
function validNewsletter(nyes,nno)  
{  
	x=0;  
	  
	if(nyes.checked)   
	{  
	x++;  
	} if(nno.checked)  
	{  
	x++;   
	}  
	if(x==0)  
	{  
	alert('Select Yes/No for newsletter');  
	nyes.focus();  
	return false;  
	}  
	else  
	{  
	return true;  
	}  
}

function validDate(udate)  
{   
	var letters = /^\d{1,2}\/\d{1,2}\/\d{4}$/;    
	if(udate.value.match(letters))  
	{  
	alert('Form Succesfully Submitted');
	saveInfo(); // execute save info and display info
	//window.location.reload()  
	return true;
	}  
	else  
	{  
	alert('Please choose a valid date');  
	udate.focus();  
	return false;  
	}  
}	


//save and display info
function saveInfo() 
{
    var useridValue = document.getElementById('userid').value;
    var passidValue = document.getElementById('passid').value;
    var usernameValue = document.getElementById('username').value;
	var addressValue = document.getElementById('address').value;
	var countryValue = document.getElementById('country').value;
	var zipValue = document.getElementById('zip').value;
	var emailValue = document.getElementById('email').value;
	var usecaseValue = document.getElementById('usecase').value;
	var newsletterValue = document.getElementById('newsletter').value;
	var datepickerValue = document.getElementById('datepicker').value;

    userid[userid.length]=useridValue;
    passid[passid.length]=passidValue;
    username[username.length]=usernameValue;
	address[address.length]=addressValue;
	country[country.length]=countryValue;
	zip[zip.length]=zipValue;
	email[email.length]=emailValue;
	usecase[usecase.length]=usecaseValue;
	newsletter[newsletter.length]=newsletterValue;
	datepicker[datepicker.length]=datepickerValue;

	displayInfo();
	//document.getElementById('submit').submit();
}

function displayInfo() 
{
	var content="<b>Your submitted information:</b><br><br>";
	
	for(var i = 0; i < userid.length; i++) 
	{
	 content += "Your chosen userid: " + userid[i]+"<br>";
	}
	
	for(var i = 0; i < passid.length; i++) 
	{
	 content += "Your chosen password: " + passid[i]+"<br>";
	}
	
	for(var i = 0; i < username.length; i++) 
	{
	 content += "Name: " + username[i]+"<br>";
	}
	
	for(var i = 0; i < address.length; i++) 
	{
	 content += "Address: " + address[i]+"<br>";
	}
	
	for(var i = 0; i < country.length; i++) 
	{
	 content += "Country: " + country[i]+"<br>";
	}
	
	for(var i = 0; i < zip.length; i++) 
	{
	 content += "Post Code/Zip Code: " + zip[i]+"<br>";
	}
	
	for(var i = 0; i < email.length; i++) 
	{
	 content += "Email: " + email[i]+"<br>";
	}
	
	for(var i = 0; i < usecase.length; i++) 
	{
	 content += "Main purpose: " + usecase[i]+"<br>";
	}
	
	for(var i = 0; i < newsletter.length; i++) 
	{
	 content += "Newsletter signup: " + newsletter[i]+"<br>";
	}
	
	for(var i = 0; i < datepicker.length; i++) 
	{
	 content += "Best date to contact you: " + datepicker[i]+"<br>";
	}
	
	document.getElementById('display-form-info').innerHTML = content;
}