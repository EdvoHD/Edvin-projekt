// tid
function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

// datum
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();


// geoloaction-weather


$.ajax({
	url: 'https://api.darksky.net/forecast/f5a32da10816fcae63e298db026df708/59.332956,17.980345',
	method: 'GET',
  headers: {"X-Test-Header": "test-value"},
  mode: 'no-cors',
	dataType: 'jsonp'
}).done(function(data, textStatus, jqXHR) {
	console.log(data.currently.temperature);

  //temperature
  var valNum = data.currently.temperature;
  var tempCel = (valNum-32) / 1.8;
  var rounded = Math.round( tempCel * 10 ) / 10;
  var todayIcon = data.currently.icon;


  $("#w-location").append(data.timezone);
  $("#w-temp-today").append(rounded);
  $("#w-temp-day1").append(rounded);
  $("#w-icon-day1").append(todayIcon);

}).fail(function(jqXHR, textStatus, errorThrown) {
	if (jqXHR.responseJSON) {
		console.log('failed with json data');
	}
	else {
		console.log('failed with unknown data');
	}
}).always(function(dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
	console.log('always');
});



// DARKSKY - EGEN
