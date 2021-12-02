let list = $('#list');

$('#button').on('click', newItem);

function newItem(){

  //adding a new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
    $('#input').val('');
  }

  //crossing out an item from the list of items
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //adding the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  //adding CLASS DELETE (DISPLAY: NONE) from the css
  function deleteListItem() {
    li.addClass('delete');
  }

  //reordering the items
  $('#list').sortable();

}
