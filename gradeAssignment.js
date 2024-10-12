let grade = prompt("Enter your grade");

grade = Number(grade);

  if (grade >= 90) 
    console.log("Grade: Excellent");
   else if (grade >= 80 && grade < 90) 
    console.log("Grade: Good");
   else if (grade >= 70 && grade < 80) 
    console.log("Grade: Fair");
   else 
    console.log("Grade: Needs Improvement");
