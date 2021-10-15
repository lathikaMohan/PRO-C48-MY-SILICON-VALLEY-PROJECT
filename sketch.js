var title;
var title1;
var mentalAbility,level1,level2,question1, next1, next2;
var generalKnowledge,stage1,stage2,question3, question6, question8;
var riddles, question7,  question9,  question11;
var puzzles;
var funAndGames;
var winSound;
var wrongSound;
var score =0;

function preload(){
  winSound = loadSound("Correct Sound.mp3");
  wrongSound = loadSound("Wrong Sound.wav");
}

function setup() {
  createCanvas(400,600);
  
  title = createElement('h2')
  title.html("Your Brain Lab ");
  title.position(510, 100);

  mentalAbility = createButton('Mental Ability');
  mentalAbility.position(530, 230);
  mentalAbility.style('background-color',"lightBlue")
  mentalAbility.style('border-radius','25px')

  generalKnowledge = createButton('General Knowledge');
  generalKnowledge.position(515, 430);
  generalKnowledge.style('background-color',"lightBlue")
  generalKnowledge.style('border-radius','25px')

  riddles = createButton('Riddles');
  riddles .position(550, 330); 
  riddles.style('background-color',"lightBlue")
  riddles.style('border-radius','25px')


  puzzles = createButton('Puzzles');
  puzzles.position(550, 380);
  puzzles.style('background-color',"lightYellow")
  puzzles.style('border-radius','25px')

  funAndGames= createButton('Fun And Games');
  funAndGames.position(520, 280);
  funAndGames.style('background-color',"lightYellow")
  funAndGames.style('border-radius','25px')

}

function draw() {
  background("lightpink");  
  drawSprites();

  mentalAbility.mousePressed(() => {
    mentalAbility.hide();
    generalKnowledge.hide();
    riddles.hide();
    puzzles.hide();
    funAndGames.hide();
    title.hide();

    title1 = createElement('h4')
    title1.html("Mental Ability ");
    title1.position(550, 100);

    level1 = createButton('EASY');
    level1 .position(550, 330);

    level2= createButton('HARD');
    level2.position(550, 380);


  level1.mousePressed(() => {
    level1.hide();
    level2.hide();

    question1 = createElement('h5')
    question1.html("16:56 as 32 : ?");
    question1.position(475, 200);

    option1 = createButton('97');
    option1 .position(550, 330);
    

    option2= createButton('112');
    option2.position(550, 380);

    option3= createButton('120');
    option3.position(550,430);

    next1= createButton('NEXT');
    next1.position(550, 490);
  
    option1.mousePressed(() => {
      option1.style('background-color',"red");
      wrongSound.play();
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"red");
    wrongSound.play();
    });
    option2.mousePressed(() => {
    option2.style('background-color',"green");
    score = score+1;

    winSound.play();

    });


    next1.mousePressed(() => {
      question1.hide();
      option1.hide();
      option2.hide();
      option3.hide();

      question2 = createElement('h5')
    question2.html("3, 5, 35, 10, 12, 35, 17, ?");
    question2.position(475, 200);

    option1 = createButton('22 35');
    option1 .position(550, 330);
    

    option2= createButton('35 19');
    option2.position(550, 380);

    option3= createButton('19 35');
    option3.position(550,430);


    option1.mousePressed(() => {
      option1.style('background-color',"red");
      wrongSound.play();
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"green");
    winSound.play();
    score = score+1;
    });
    option2.mousePressed(() => {
    option2.style('background-color',"red");
    wrongSound.play();

    });


    next1.mousePressed(() => {

      console.log("Hello");

      question2.hide();
      option1.hide();
      option2.hide();
      option3.hide();
      next1.hide();


      displayTotalScore = createElement('h5') 
      displayTotalScore.html("Score: "+score); 
      displayTotalScore.position(500, 300);
      
    });

    });


    console.log("Inside the click ");

  }); //EASY LEVEL ENDS HERE
  /*  
  next1.mousePressed(() => {
    question1.hide();
    option1.hide();
    option2.hide();
    option3.hide();
    //next1.hide();
    )}

    

    question2 = createElement('h5')
    question2.html("3, 5, 35, 10, 12, 35, 17, ?");
    question2.position(475, 200);

    option1 = createButton('22 35');
    option1 .position(550, 330);
    

    option2= createButton('35 19');
    option2.position(550, 380);

    option3= createButton('19 35');
    option3.position(550,430);
     
*/
    //next2= createButton('NEXT');
    //next2.position(550, 490);
  
    level2.mousePressed(() => { //level 2 starts
      console.log()
      level1.hide();
      level2.hide();

      score = 0;
  
      question = createElement('h5')
      question.html("20, 10, 2, -4, -8, ?");
      question.position(475, 200);
  
      option1 = createButton('-12');
      option1 .position(550, 330);
      
  
      option2= createButton('-11');
      option2.position(550, 380);
  
      option3= createButton('-10');
      option3.position(550,430);
  
      next2= createButton('NEXT');
      next2.position(550, 490);
  
  
      option1.mousePressed(() => {
        option1.style('background-color',"red");
        wrongSound.play();
      });
      
      option3.mousePressed(() => {
      option3.style('background-color',"green");
      winSound.play();
      score= score + 1;
      });
      option2.mousePressed(() => {
      option2.style('background-color',"red");
      wrongSound.play();
  
      //winSound.play();
  
      });
  
      next2.mousePressed(() => {
        question.hide();
        option1.hide();
        option2.hide();
        option3.hide();
        //next1.hide();
    
        
    
        question0 = createElement('h5')
        question0.html("53, 53, 40, 40, 27, 27, ?");
        question0.position(475, 200);
    
        option1 = createButton('12');
        option1 .position(550, 330);
        
    
        option2= createButton('14');
        option2.position(550, 380);
    
        option3= createButton('53');
        option3.position(550,430);
  
        option1.mousePressed(() => {
          option1.style('background-color',"red");
          wrongSound.play();
        });
        option2.mousePressed(() => {
          option2.style('background-color',"green");
          winSound.play();
          score= score + 1;
      
          });
        
        option3.mousePressed(() => {
        option3.style('background-color',"red");
        wrongSound.play();
        });
       
        next2.mousePressed(() => {

          console.log("Hello");
    
          question0.hide();
          option1.hide();
          option2.hide();
          option3.hide();
          next2.hide();
    
    
          displayTotalScore = createElement('h5') 
          displayTotalScore.html("Score: "+score); 
          displayTotalScore.position(500, 300);

    
        });
    


      });
    
    });//level 2 ends here

  }); //mental ability getting closed



  //Riddles starts here
  riddles.mousePressed(() => {
    mentalAbility.hide();
    generalKnowledge.hide();
    riddles.hide();
    puzzles.hide();
    funAndGames.hide();
    title.hide();

    title2 = createElement('h4')
    title2.html("Riddles ");
    title2.position(550, 100);

    level3 = createButton('EASY');
    level3 .position(550, 330);

    level4= createButton('HARD');
    level4.position(550, 380);


  level3.mousePressed(() => {
    level3.hide();
    level4.hide();

    question1 = createElement('h5')
    question1.html("What has bank but no money?");
    question1.position(475, 200);

    option1 = createButton('River bank');
    option1 .position(550, 330);
    

    option2= createButton('Bank of Ireland');
    option2.position(550, 380);

    option3= createButton('Commercial bank');
    option3.position(550,430);

    next1= createButton('NEXT');
    next1.position(550, 490);
  
    option1.mousePressed(() => {
      option1.style('background-color',"green");
      winSound.play();
      score = score+1;
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"red");
    wrongSound.play();
    });
    option2.mousePressed(() => {
    option2.style('background-color',"red");
    wrongSound.play();
  
    });


    next1.mousePressed(() => {
      question1.hide();
      option1.hide();
      option2.hide();
      option3.hide();

    question2 = createElement('h6')
    question2.html("You throw away my outside, eat my inside,then throw away the inside. What am I?");
    question2.position(405, 200);

    option1 = createButton('Fish in a sea');
    option1 .position(550, 330);
    

    option2= createButton('Fruit on a tree');
    option2.position(550, 380);

    option3= createButton('Corn on the cob');
    option3.position(550,430);


    option1.mousePressed(() => {
      option1.style('background-color',"red");
      wrongSound.play();
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"green");
    winSound.play();
    score = score+1;
    });
    option2.mousePressed(() => {
    option2.style('background-color',"red");
    wrongSound.play();

    });


    next1.mousePressed(() => {

      console.log("Hello");

      question2.hide();
      option1.hide();
      option2.hide();
      option3.hide();
      next1.hide();


      displayTotalScore = createElement('h5') 
      displayTotalScore.html("Score: "+score); 
      displayTotalScore.position(500, 300);
      
    });

    });


    console.log("Inside the click ");

  }); //EASY LEVEL ENDS HERE
 
    //next2= createButton('NEXT');
    //next2.position(550, 490);
  
    level4.mousePressed(() => { //level 2 starts
      console.log()
      level3.hide();
      level4.hide();

      score = 0;
  
      question7 = createElement('h5')
      question7.html(" Tom is younger than Dave but older than Jill.");
      question7.position(475, 200);

      question9 = createElement('h5')
      question9.html(" Lou is older than Sally who is older than Tom.");
      question9.position(475, 230);

      question11 = createElement('h5')
      question11.html(" Dave is older than Lou.");
      question11.position(475, 250);

  
      option1 = createButton('Dave');
      option1 .position(550, 330);
      
  
      option2= createButton('Sally');
      option2.position(550, 380);
  
      option3= createButton('Jill');
      option3.position(550,430);
  
      next2= createButton('NEXT');
      next2.position(550, 490);
  
  
      option1.mousePressed(() => {
        option1.style('background-color',"red");
        wrongSound.play();
      });
      
      option3.mousePressed(() => {
      option3.style('background-color',"red");
      wrongSound.play(); 
     
      });
      option2.mousePressed(() => {
      option2.style('background-color',"green");
      winSound.play();
      score= score + 1;
  
      });
  
      next2.mousePressed(() => {
        question7.hide();
        question9.hide();
        question11.hide();
        option1.hide();
        option2.hide();
        option3.hide();
        //next1.hide();
    
        
    
        question0 = createElement('h5')
        question0.html("I have no doors but I have keys, I have no rooms ");
        question0.position(475, 200);
    
        question01 = createElement('h5')
        question01.html("but I do have a space, you can enter but you can  ");
        question01.position(475, 230);
    
        question02 = createElement('h5')
        question02.html("never leave. What am I?  ");
        question02.position(475, 250);
    
        option1 = createButton('Piano');
        option1 .position(550, 330);
        
    
        option2= createButton('Keyboard');
        option2.position(550, 380);
    
        option3= createButton('Saxophone');
        option3.position(550,430);
  
        option1.mousePressed(() => {
          option1.style('background-color',"red");
          wrongSound.play();
        });
        option2.mousePressed(() => {
          option2.style('background-color',"green");
          winSound.play();
          score= score + 1;
      
          });
        
        option3.mousePressed(() => {
        option3.style('background-color',"red");
        wrongSound.play();
        });
       
        next2.mousePressed(() => {

          console.log("Hello");
    
          question0.hide();
          question01.hide();
          question02.hide();

          option1.hide();
          option2.hide();
          option3.hide();
          next2.hide();
    
    
          displayTotalScore = createElement('h5') 
          displayTotalScore.html("Score: "+score); 
          displayTotalScore.position(500, 300);

    
        });
    


      });
    
    });//level 2 ends here

  }); //mental ability getting closed

  //Riddles ends here



  generalKnowledge.mousePressed(() => {
    mentalAbility.hide();
    generalKnowledge.hide();
    riddles.hide();
    puzzles.hide();
    funAndGames.hide();
    title.hide();

    title3 = createElement('h4')
    title3.html("Riddles ");
    title3.position(550, 100);

    stage1 = createButton('EASY');
    stage1 .position(550, 330);

    stage2= createButton('HARD');
    stage2.position(550, 380);


  stage1.mousePressed(() => {
    stage1.hide();
    stage2.hide();

    question3 = createElement('h5')
    question3.html("Who is known as the Iron Man of India?");
    question3.position(475, 200);

    option1 = createButton(' Subash Chandra Bose');
    option1 .position(550, 330);
    

    option2= createButton(' Bhagat Singh');
    option2.position(550, 380);

    option3= createButton(' Sardar Vallabhbhai Patel');
    option3.position(550,430);

    next1= createButton('NEXT');
    next1.position(550, 490);
  
    option1.mousePressed(() => {
      option1.style('background-color',"red");
       wrongSound.play();
    });

    option2.mousePressed(() => {
    option2.style('background-color',"red");
    wrongSound.play();
  
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"green");
    winSound.play();
    score = score+1;
    });
    


    next1.mousePressed(() => {
      question3.hide();
      option1.hide();
      option2.hide();
      option3.hide();

    question6 = createElement('h5')
    question6.html("Who was the first Indian scientist to win nobel prize?");
    question6.position(405, 200);

    option1 = createButton('Sir Chandrasekhara Venkata Raman');
    option1 .position(520, 330);
    

    option2= createButton('Har Gobind Khorna');
    option2.position(520, 380);

    option3= createButton('Subrahmanyan Chandrasekhar');
    option3.position(520,430);


    option1.mousePressed(() => {
      option1.style('background-color',"green");
      winSound.play();
      score = score+1;
    });
    
    option3.mousePressed(() => {
    option3.style('background-color',"red");
    wrongSound.play();
    });
    option2.mousePressed(() => {
    option2.style('background-color',"red");
    wrongSound.play();

    });


    next1.mousePressed(() => {

      console.log("Hello");

      question6.hide();
      option1.hide();
      option2.hide();
      option3.hide();
      next1.hide();


      displayTotalScore = createElement('h5') 
      displayTotalScore.html("Score: "+score); 
      displayTotalScore.position(500, 300);
      
    });

    });


    console.log("Inside the click ");

  }); //EASY LEVEL ENDS HERE
 
 //HARD starts
  
    stage2.mousePressed(() => { 
      console.log()
      stage1.hide();
      stage2.hide();

      score = 0;
  
      question8 = createElement('h5')
      question8.html(" Who is called the father of periodic table? ");
      question8.position(475, 200);
  
      option1 = createButton('Alice Ball');
      option1 .position(550, 330);
      
      option2= createButton('Dmitri Mendeleev');
      option2.position(550, 380);
  
      option3= createButton('Marie Curie');
      option3.position(550,430);
  
      next2= createButton('NEXT');
      next2.position(550, 490);
  
  
      option1.mousePressed(() => {
        option1.style('background-color',"red");
        wrongSound.play();
      });
      
      option3.mousePressed(() => {
      option3.style('background-color',"red");
      wrongSound.play();  
     
      });
      option2.mousePressed(() => {
      option2.style('background-color',"green");
      winSound.play();
      score= score + 1;
  
      });
  
      next2.mousePressed(() => {
        question8.hide();
        option1.hide();
        option2.hide();
        option3.hide();
        //next1.hide();
    
        
    
        question10 = createElement('h5')
        question10.html("What Was the Largest Contiguous Empire in History? ");
        question10.position(460, 200);
    
        
        option1 = createButton('The Chola Empire');
        option1 .position(530, 330);
        
    
        option2= createButton('The Britan Empire');
        option2.position(530, 380);
    
        option3= createButton('The Mongol Empire');
        option3.position(530,430);
  
        option1.mousePressed(() => {
          option1.style('background-color',"red");
          wrongSound.play();
        });
        option2.mousePressed(() => {
          option2.style('background-color',"red");
          wrongSound.play();
          });
        
        option3.mousePressed(() => {
        option3.style('background-color',"green");
        winSound.play();
        score= score + 1;
      
        });
       
        next2.mousePressed(() => {

          console.log("Hello");
          
          question10.hide();
          option1.hide();
          option2.hide();
          option3.hide();
          next2.hide();
    
    
          displayTotalScore = createElement('h5') 
          displayTotalScore.html("Score: "+score); 
          displayTotalScore.position(500, 300);

    
        });
    


      });
    
    });//HARD ends here

  }); //General Knowledge getting closed


  //General Knowledge ends here
}