function submitQuiz()
{
    var loading = document.getElementById('loading');
   

    var q1 = document.getElementsByName("question1");
    var q2 = document.getElementsByName("question2");
    var q3 = document.getElementsByName("question3"); 
    var q4 = document.getElementsByName("question4"); 
    var q5 = document.getElementsByName("question5"); 
    var x=0;
    var i=0;
    


    if  (q1[0].checked == false && q1[1].checked == false && q1[2].checked == false) {
        

      alert("Répondre aux question 1 !");

    }
    else if (q1[0].checked == true){
        x+=2;
        i=i+1;
    }
    else {
        x+=0;
        i=i+1;
    }


    if  (q2[0].checked == false && q2[1].checked == false && q2[2].checked == false) {
        alert("Répondre aux question 2 !");

    }
    else if (q2[2].checked ){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }

    if  (q3[0].checked == false && q3[1].checked == false && q3[2].checked == false) {

        alert("Répondre aux question 3 !");
    }
    else if (q3[0].checked == true){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }

    if  (q4[0].checked == false && q4[1].checked == false && q4[2].checked == false) {

        alert("Répondre aux question 4 !");
    }
    else if (q4[0].checked == true){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }

    if  (q5[0].checked == false && q5[1].checked == false && q5[2].checked == false) {

        alert("Répondre aux question 5 !");
    }
    else if (q5[0].checked == true){
        x=x+2;
        i=i+1;
    }
    else {
        x=x+0;
        i=i+1;
    }
    if (i==5){

        loading.parentNode.removeChild(loading);

         var resultsContainer = document.getElementById("results");
         resultsContainer.innerHTML = "Votre score est de " + x + " sur " + 10;
         var rep = document.getElementById("rep");
         rep.innerHTML = "<br><p>Les réponses correcte :</p><br> <div >Q1 : Elephant <br> Q2 : Cheetah <br> Q3 : Tortue <br> Q4 : Dauphin <br> Q5 : Chimpanzé </div>" ;
    }
}
