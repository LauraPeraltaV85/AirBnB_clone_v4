$(document).ready(function () {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const checkboxArray = Array.from(checkboxes);
  const checkList = [];

  function removeItem (array, item) {
    for (var i in array) {
      if (array[i] === item) {
        array.splice(i, 1);
        break;
      }
    }
  }

  function confirmCheck () {
    if (this.checked) {
      checkList.push(this.getAttribute('data-name'));
    } else {
      removeItem(checkList, this.getAttribute('data-name'));
    }
    $('.amenities h4').text(checkList.sort());
  }

  checkboxArray.forEach(function (checkbox) {
    checkbox.addEventListener('change', confirmCheck);
  });

  $.ajax({url: "http://0.0.0.0:5001/api/v1/status/"})
  .done(function(data){
    if (data.status == 'OK') {
      $('div#api_status').addClass('available');
    }
  })
  .fail(function(jqXHR, textStatus){
    $('div#api_status').removeClass('available');
  });

  /*
  $.get("http://0.0.0.0:5001/api/v1/status/", function(data, textStatus)
	{
    if (data.status == 'OK') {
      $('div#api_status').addClass('available');
    }
	});*/
  
  
  $.ajax({
      url: "http://0.0.0.0:5001/api/v1/places_search/",
      type: 'POST',
      data: JSON.stringify({}),
      dataType: "json",
      contentType: "application/json"
  })
  .done(function(data) {
    data.forEach(place => {
      $('section.places').append(
      '<article>' +
      '<div class="title">' +
      '<h2>' + place.name + '</h2>' +
      '<div class="price_by_night">' +
      place.price_by_night +
      '</div>' +
      '</div>' +
      '<div class="information">' +
      '<div class="max_guest">' +
      '<i class="fa fa-users fa-3x" aria-hidden="true"></i>' +
      '<br />' +
      place.max_guest + 'Guests' +
      '</div>' +
      '<div class="number_rooms">' +
      '<i class="fa fa-bed fa-3x" aria-hidden="true"></i>' +
      '<br />' +
      place.number_rooms + 'Bedrooms' +
      '</div>' +
      '<div class="number_bathrooms">' +
      '<i class="fa fa-bath fa-3x" aria-hidden="true"></i>' +
      '<br />' +
      place.number_bathrooms + 'Bathroom' +
      '</div>' +
      '</div>' +
      '<div class="user">' +
      '</div>' +
      '<div class="description">' +
      place.description +
      '</div>' +
      '</article>')
    });
  });

  /*
  $.post("http://0.0.0.0:5001/api/v1/places_search/",
	{
    states: ["2b9a4627-8a9e-4f32-a752-9a84fa7f4efd", "459e021a-e794-447d-9dd2-e03b7963f7d2"],
    cities: ["5976f0e7-5c5f-4949-aae0-90d68fd239c0"]
  },
	function(data, textStatus)
	{
		alert(data);
	});*/
});
