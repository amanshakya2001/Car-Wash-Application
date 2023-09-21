$(document).ready(function() {
    // Attach a change event listener to the radio buttons
    $('input[type=radio][name=flexRadioDefault]').change(function() {
      // Get the value of the selected radio button
      var selectedValue = $("input[type=radio][name=flexRadioDefault]:checked").val();

      // Update the text in the result element based on the selected value
      if (selectedValue === 'option1') {
        $('#dynamicGreet').text('Hello User!');
      } else if (selectedValue === 'option2') {
        $('#dynamicGreet').text('Hello Washer!');
      }
    });
});