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
});
