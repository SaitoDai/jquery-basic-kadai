 
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  })
  $('#change-color-off').on('click', function() {
    $('#target').css('color', '');
  })

  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  })
  $('#change-text-off').on('click', function() {
    $('#target').text('こんにちは!');
  })

  $('#fade-out').on('click', function() {
    $('#target').css('opacity', 0);
  })

  $('#fade-in').on('click', function() {
    $('#target').css('opacity', 1);
  })
