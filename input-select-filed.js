/**
 * This code set previous value to select input field,
 * when confirm prompt return false.
 */

var val;
$('.f1m-table').on('focus', '.helpstatusform', function() {
  val = $(this).val();
  console.log(val);
}).on('change', '.helpstatusform', function() {
  if (confirm('Are you sure ?')) {
    $(this).parent('form').submit();
    return true;
  }

  $(this).val(val);
  return false;
});
