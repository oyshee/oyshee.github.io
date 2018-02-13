function Calculation(){
	var str = document.getElementById("input").value;
		var arr1 = str.split(",");
		var arr2=arr1.reverse();


		var i;
		var maxval=0;
		var minval=99999999;
		var sum=0;

		// finding max
		for(i=0;i<arr1.length;i++){
		  maxval=Math.max(maxval,parseInt(arr1[i]));
		  minval=Math.min(minval,parseInt(arr1[i]));
		  sum+=parseInt(arr1[i]);
		}

		document.getElementById("max").innerHTML="Max: "+maxval;
		document.getElementById("min").innerHTML="Min: "+minval;
		document.getElementById("sum").innerHTML="Sum: "+sum;
		document.getElementById("avg").innerHTML="Average: "+(sum/arr1.length);
		document.getElementById("rev").innerHTML="Reverse Order: "+ arr2.toString();


}