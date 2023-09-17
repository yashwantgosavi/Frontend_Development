function main(marks) {
    let result;
if(marks>=90){
   result="A grade";
}
else if(marks<=89 && marks>=80){
result="B grade";
}
else if(marks<=79 && marks>=70){
    result="C grade";
}
else if (marks<=69 && marks>=60) {
result="D grade";
}
else{
    result="F grade"
}

   return result;
}

main(60);