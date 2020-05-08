var button = document.querySelector('.button')


button.addEventListener('click',function(){
	var weight = document.querySelector('#weight').value
    var height = document.querySelector('#height').value
	console.log(button)
	console.log(weight)
	console.log(height)
	var p = parseInt(weight)
	console.log(p)
	var p1 = parseInt(height)
	console.log(p1)
	var result = document.querySelector(".result")
	console.log(result)
	var we = document.querySelector(".we")
	console.log(we)

  var w = document.querySelector("#myselect").value
 console.log(w)
 var h = document.querySelector("#myselect2").value
 console.log(h)
  if (h=="cm"&&w=="kilogram") {
//     if(h is in meter){
	var HI = height/100
	console.log(HI)
	var BMI = (weight)/(HI*HI)
	var f = BMI.toFixed(2)
	result.innerHTML = "BMI = "+f;


}else if(h=="m"&&w=="kilogram"){
    var BMI = (weight)/(height*height)
	console.log(BMI)
	var f = BMI.toFixed(2)
	result.innerHTML = "BMI = "+f;
	

}else if(h=="inches"&&w=="kilogram"){
	var i = height*0.0254
	var BMI = (weight)/(i*i)
	console.log(BMI)
	var f = BMI.toFixed(2)
	result.innerHTML = "BMI = "+f;

}else if(h=='inches'&&w=='pound'){
	var BMI = ((weight/(height*height)) * 703)
	console.log(BMI)
	var f = BMI.toFixed(2)
	result.innerHTML = "BMI = "+f;

	

}else if(h=="cm"&&w=="pound"){
	var j = height/2.54
	var BMI = ((weight/(j*j)) * 703)
	console.log(BMI)
	var f = BMI.toFixed(2)
	result.innerHTML = "BMI = "+f;


}else if(h=="m"&w=="pound"){
	var k = height/39.37
	var BMI = ((weight/(k*k)) * 703)
	console.log(BMI)
	var f = BMI.toFixed(2)
	result.innerHTML = "BMI = "+f;

}

if(f<18.5){
		we.innerHTML = "Underweight"

	}else if(f>=18.5&&f<24.9){
	we.innerHTML = "Normal Weight"
    }else if(f>=25&&f<29.9){
    	we.innerHTML = "Over Weight"

    }else if(f>=30){
    	we.innerHTML = "Obesity"

    }



// }else if( h in cm)
// divide h my 100 then bmi




//     var BMI = weight/
	



})