$(function(){

  // checkbox toggle function
  $.fn.checkboxToggle = function(checklist){
    return this.on('click', function(){
      $(checklist).prop('checked', $(this).prop('checked'));
    });
  }

  // select all button toggle function
  $.fn.selectBoxToggle = function(selectbox){
    var $checkboxes = this;

    return $checkboxes.change(function(){
      var check = $checkboxes.filter(':checked').length == $checkboxes.length;
      $(selectbox).prop('checked', check);
    });
  }

  // change text function
  $.fn.changeSelectAll = function(selectbox) {
    return this.change(function(){
      if ($(selectbox).is(':checked')) {
        $(selectbox).siblings('label').html('Deselect all');
      } else {
        $(selectbox).siblings('label').html('Select all');
      }
    })
  }

  var $subjectInput = $('input[name=subject]');
  var $gradeInput = $('input[name=grade]');

  // toggle subjects
  $('#check-all').checkboxToggle($subjectInput);
  $subjectInput.selectBoxToggle('#check-all');
  $subjectInput.changeSelectAll('#check-all');
  $('#check-all').changeSelectAll('#check-all');

  // toggle grades
  $('#all').checkboxToggle($gradeInput);
  $gradeInput.selectBoxToggle('#all');
});
