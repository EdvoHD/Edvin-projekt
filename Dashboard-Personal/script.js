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
	url: 'https://api.darksky.net/forecast/f5a32da10816fcae63e298db026df708/37.8267,-122.4233',
	method: 'GET',
  headers: {"X-Test-Header": "test-value"},
	// data: JSON.stringify({var:'val'}), // send data in the request body
	// contentType: "application/json; charset=utf-8",  // if sending in the request body
	dataType: 'json'
}).done(function(data, textStatus, jqXHR) {
	// because dataType is json 'data' is guaranteed to be an object
	console.log('done');
}).fail(function(jqXHR, textStatus, errorThrown) { console.log(jqXHR)
	// the response is not guaranteed to be json
	if (jqXHR.responseJSON) {
		// jqXHR.reseponseJSON is an object
		console.log('failed with json data');
	}
	else {
		// jqXHR.responseText is not JSON data
		console.log('failed with unknown data');
	}
}).always(function(dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
	console.log('always');
});
