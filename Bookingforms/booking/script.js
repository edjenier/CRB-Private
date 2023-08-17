$(document).ready(function () {
  // Inicializar los datepickers
  $('#fecha-inicial, #fecha-final').datepicker({
    format: 'dd/mm/yyyy',
    autoclose: true,
    todayHighlight: true,
  });
});
