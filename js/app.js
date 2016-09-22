$(function(){

  // checkbox toggle function
  $.fn.checkboxToggle = function(checklist){
    return this.on('click', function(){
      $(checklist).prop('checked', $(this).prop('checked'));
    });
  }

  var $subjectInput = $('input[name=subject]');
  var $gradeInput = $('input[name=grade]');

  // toggle subjects
  $('#check-all').checkboxToggle($subjectInput);

  // toggle grades
  $('#all').checkboxToggle($gradeInput);
});
