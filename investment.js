function investment_logic(){
	var begninning_value=$('#invested_amount').val();
	var years=$('#years').val();
	var cagr=21.7;

	if(begninning_value==''|| years==''){
		alert('Please Enter the corect values');
	}else{
		year_value=((1/years));
		cagrs=(cagr+1);
		values=Math.pow(cagrs, year_value);
		test=(1/values);
		console.log(year_value);
		console.log(cagrs);
		console.log(values);
		console.log(test);
		ending_value=begninning_value*test;
		console.log(ending_value);

		$('#end').text('Rs '+ending_value);
          $('#end_value').text(ending_value);
          $('#start').text(begninning_value);    

	}
}
