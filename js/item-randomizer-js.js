$(function(){
  var addButton = $('#add-item-button');
  var itemList = $('#item-list');
  
  addButton.on('click', function() {
    event.preventDefault();
    newItem = $('#new-item-input').val();
    itemList.prepend('<li class="list-group-item">' + newItem + '</li>');
    $('#new-item-input').val('');
  });
});

$('.list-group li').click(function() {
    console.log('hello?')
});

