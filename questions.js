   function displayCourse(){
   
   var status = document.getElementById('status').value;
   var position = document.getElementById('position').value;
   
 if ( status=='Undergraduate' && position=='Position 1' ) 
	{
        var option1 = document.getElementById('option1');
		option1.style.display = "block";
		
		var option2 = document.getElementById('option2');
		option2.style.display = "none";
		
		var option3 = document.getElementById('option3');		
		option3.style.display = "none";
		
		var option4 = document.getElementById('option4');		
		option4.style.display = "none";
	}
		
     else if ( status=='Undergraduate' && position=='Position 2') 
	 {
        var option1 = document.getElementById('option1');
		option1.style.display = "none";
		
		var option2 = document.getElementById('option2');
		option2.style.display = "block";
		
		var option3 = document.getElementById('option3');		
		option3.style.display = "none";
		
		var option4 = document.getElementById('option4');		
		option4.style.display = "none";
		
	} 
	
	else if ( status=='Graduate' && position=='Position 1') 
	
	{
        var option1 = document.getElementById('option1');
		option1.style.display = "none";
		
		var option2 = document.getElementById('option2');
		option2.style.display = "none";
		
		var option3 = document.getElementById('option3');		
		option3.style.display = "block";
		
		var option4 = document.getElementById('option4');		
		option4.style.display = "none";
		
	}
	
	else if ( status=='Graduate' && position=='Position 2')
	{
        var option1 = document.getElementById('option1');
		option1.style.display = "none";
		
		var option2 = document.getElementById('option2');
		option2.style.display = "none";
		
		var option3 = document.getElementById('option3');		
		option3.style.display = "none";
		
		var option4 = document.getElementById('option4');		
		option4.style.display = "block";		
    }  	
	}
	  
     function convertnumeric(grade) 
    {
		
   	if     (grade == 'Grade A' || grade == 'a') 	return 4.0;	
	else if(grade == 'Grade B' || grade == 'b') 	return 3.0;	
	else if(grade == 'Grade C' || grade == 'c')  	return 3.0;	
	else if(grade == 'Grade D' || grade == 'd') 	return 2.0;	
	else	return 0;
	}
	
 function Cal_Avg(){
 
	var status = document.getElementById('status').value;
	var position = document.getElementById('position').value;
         
	if ( status=='Undergraduate' && position=='Position 1' ) 
	{
	var course1grade = document.getElementById("position1course1Grade").value;
	var position1 = convertnumeric(course1grade);
	var course2grade = document.getElementById("position1course2Grade").value;
	var position2 = convertnumeric(course2grade); 
	 var course3grade = document.getElementById("position1course3Grade").value;
	 var position3 = convertnumeric(course3grade);
	 var course4grade = document.getElementById("position1course4Grade").value;
	 var position4 = convertnumeric(course4grade);
	 var average = (position1 + position2 + position3 + position4)/4;	
	var message="<p>Your overall GPA is: "+average+"</p>"; 
	document.getElementById("gpa").innerHTML= message;	 
 
	if (average < 3.2 ) 
	{
	document.getElementById("result").innerHTML = 'Thank you for your interest, but you are not eligible to apply for this position.';	 
	} 
	else 
	{	 
	document.getElementById("result").innerHTML = '"Congratulations". You are eligible to apply for the position. Click link below to complete the application process. </br></br><a href="myForm.php"><b>Online Application Form</b></a></br></br>More instructions will be available within the application itself.  ';
	} 
} 

else if (status=='Undergraduate' && position=='Position 2') {

	var course1grade = document.getElementById("position2course1Grade").value;
	var position1 = convertnumeric(course1grade);
	var course2grade = document.getElementById("position2course2Grade").value;
	var position2 = convertnumeric(course2grade);
	var course3grade = document.getElementById("position2course3Grade").value;
	var position3 = convertnumeric(course3grade);
	var course4grade = document.getElementById("position2course4Grade").value;
	var position4 = convertnumeric(course4grade);
	var average = (position1 + position2 + position3 + position4)/4;
	var message="<p>Your overall GPA is: "+average+"</p>"; 
	document.getElementById("gpa").innerHTML= message;	
 
	if (average < 3.2 ) 
	{
	document.getElementById("result").innerHTML = 'Thank you for your interest, but you are not eligible to apply for this position.';	 
	} 
	else 
	{	
	document.getElementById("result").innerHTML = '"Congratulations". You are eligible to apply for the position. Click link below to complete the application process. </br></br><a href="myForm.php"><b>Online Application Form</b></a></br></br>More instructions will be available within the application itself.  ';
	} 
} 

	else if ( status=='Graduate' && position=='Position 1') 
	{

	var course1grade = document.getElementById("position3course1Grade").value;
	var position1 = convertnumeric(course1grade);
	var course2grade = document.getElementById("position3course2Grade").value;
	var position2 = convertnumeric(course2grade);
	var course3grade = document.getElementById("position3course3Grade").value;
	var position3 = convertnumeric(course3grade);
	var course4grade = document.getElementById("position3course4Grade").value;
	var position4 = convertnumeric(course4grade);
	var average = (position1 + position2 + position3 + position4)/4;
	var message="<p>Your overall GPA is: "+average+"</p>"; 
	document.getElementById("gpa").innerHTML= message;
	
	
	if (average < 3.7 ) 
	{
	document.getElementById("result").innerHTML = 'Thank you for your interest, but you are not eligible to apply for this position.';	 
	} 
	else 
	{
	document.getElementById("result").innerHTML = '"Congratulations". You are eligible to apply for the position. Click link below to complete the application process. </br></br><a href="myForm.php"><b>Online Application Form</b></a></br></br>More instructions will be available within the application itself.  ';
	} 
} 

	else if ( status=='Graduate' && position=='Position 2') 
	{

	var course1grade = document.getElementById("position4course1Grade").value;
	var position1 = convertnumeric(course1grade);
	var course2grade = document.getElementById("position4course2Grade").value;
	var position2 = convertnumeric(course2grade);
	var course3grade = document.getElementById("position4course3Grade").value;
	var position3 = convertnumeric(course3grade);
	var course4grade = document.getElementById("position4course4Grade").value;
	var position4 = convertnumeric(course4grade);
	var average = (position1 + position2 + position3 + position4)/4;
	var message="<p>Your overall GPA is: "+average+"</p>"; 
	document.getElementById("gpa").innerHTML= message;

	 
if (average < 3.7 )
 
	{
	document.getElementById("result").innerHTML = 'Thank you for your interest, but you are not eligible to apply for this position.';	 
	} 
	else 
	{
	document.getElementById("result").innerHTML = '"Congratulations". You are eligible to apply for the position. Click link below to complete the application process. </br></br><a href="myForm.php"><b>Online Application Form</b></a></br></br>More instructions will be available within the application itself.  ';
	} 
	} 
}