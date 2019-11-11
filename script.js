// JavaScript Document
jQuery(document).ready( function() {
	$('#runButton').on('click',function(){
		var $input = $(".encrypted-string").val().split("   "),
			$output = [];
		$($input).each(function(index, elem){
			$output.push(numberQuarter(elem));
			$output.push(' ');						
		});	
		alert($output.join(''));
		$(".encrypted-string").val("");		
	});
	
	function numberQuarter($param){
		var $input = $param.split(/\s/g),
			$output = [];
		$($input).each(function(index, elem){
			var $normalizeInput;
			switch(elem.charAt(0)) {
				case 'T': $normalizeInput = reverse(elem.substr(1)); break;
				case 'R': $normalizeInput = dedublicate(elem.substr(1)); break;
				case 'E': $normalizeInput = changeFirstLast(elem.substr(1)); break;
				default:  $normalizeInput = elem; break;
			}
			//console.log($normalizeInput);
			switch($normalizeInput){
				case '.----': $output.push('1'); break;
				case '..---': $output.push('2'); break;
				case '...--': $output.push('3'); break;
				case '....-': $output.push('4'); break;
				case '.....': $output.push('5'); break;
				case '-....': $output.push('6'); break;
				case '--...': $output.push('7'); break;
				case '---..': $output.push('8'); break;
				case '----.': $output.push('9'); break;
				case '-----': $output.push('0'); break;
        	}			
		});	
		return $output.join('');
	}
	
	function reverse($param) {
		return $param.split("").reverse().join("");			
	}
	
	function changeFirstLast($param) {
		var $first = $param.charAt(0),
			$last =  $param.slice(-1),
			$body =  $param.substring(1, $param.length-1);
		return $last+$body+$first;
	}
	function dedublicate($param) {
		var $dedubl = [];	
		
		for(var i = 0; i< $param.length;i+=2){
		  $dedubl.push($param[i]);
		}	
		
		return $dedubl.join('');
	}   
})


