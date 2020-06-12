


var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.dexcom.com/v2/oauth2/login?client_id={your_client_id}&redirect_uri={your_redirect_uri}&response_type=code&scope=offline_access&state={your_state_value}");
xhr.setRequestHeader("authorization", "Bearer {your_access_token}");

xhr.send(data);

var data = null;

​

var xhr = new XMLHttpRequest();

xhr.withCredentials = true;

​

xhr.addEventListener("readystatechange", function () {

  if (this.readyState === 4) {

    console.log(this.responseText);

  }

});

​

xhr.open("GET", "https://api.dexcom.com/v2/users/self/devices?startDate=2017-06-16T08:00:00&endDate=2017-06-17T08:00:00");

xhr.setRequestHeader("authorization", "Bearer {your_access_token}");

​
xhr.send(data);
 