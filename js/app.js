$(function(){

  // checkbox toggle function
  $.fn.checkboxToggle = function(checklist){
    return this.on('click', function(){
      $(checklist).prop('checked', $(this).prop('checked'));
    });
  }

  // select all button toggle
  $.fn.selectBoxToggle = function(selectbox){
    var $checkboxes = this;

    return $checkboxes.change(function(){
      var check = $checkboxes.filter(':checked').length == $checkboxes.length;
      $(selectbox).prop('checked', check);
    });
  }

  var $subjectInput = $('input[name=subject]');
  var $gradeInput = $('input[name=grade]');

  // toggle subjects
  $('#check-all').checkboxToggle($subjectInput);
  $subjectInput.selectBoxToggle('#check-all');

  // toggle grades
  $('#all').checkboxToggle($gradeInput);
  $gradeInput.selectBoxToggle('#all');
});
