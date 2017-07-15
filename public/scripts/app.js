console.log("Sanity Check: JS is working! NOWWW");

$(document).ready(function(){
  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});

function handleSuccess(json) {
  console.log(json);
  var imgHtml = '<img src="images/pup.jpeg" />'
  json.forEach(function(event, i){
    $('#info').append($(`<p> ${json[i].title} ${json[i].artist} </p>`))
  })
}

$.ajax({
  method: 'GET',
  url: '/api/taquerias',
  success: handleResponse
});

function handleResponse(json) {
  json.forEach(function(event, i){
    // $(".info").html('<p> + taquerias.name </p>')

    $('#info').append($(`<p> ${json[i].name} </p>`))
  })
}

//http://localhost:3000/
