$("#bold").click(function(){
	console.log( $("#box").css("fontWeight"))
  if ($('#box').css('font-weight') == '400') 
 
  {
    $('#box').css('font-weight','bold');
  } 

  else 

  {
    $('#box').css('font-weight','normal');
  }

});

$('#italic').click(function(){
	if ($('#box').css('font-style') == 'normal')	

	{
		$('#box').css('font-style', 'italic')
	}

	else 

	{
		$('#box').css('font-style', 'normal')
	}

});


$('#underlined').click(function(){
console.log('clicked')
console.log($('#box').css('text-decoration'))
	if ($('#box').css('text-decoration') == 'underline solid rgb(0, 0, 0)')	

	{
		console.log(true)
		$('#box').css('text-decoration', 'none');
	}

	else 

	{
		$('#box').css('text-decoration', 'underline')
	}

});


$('#font').change(function(){
	$('#box').css('font-family', $('#font').val())
});


$('#size').change(function(){
	$('#box').css('font-size' , $('#size').val()+'px')
})