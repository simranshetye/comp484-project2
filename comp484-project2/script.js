$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    var pet_info = {
        name: "TicTac",
        weight: 10,
        happiness: 5,
        energy: 8
    };
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.nap-button').click(clickedNapButton);

    function clickedTreatButton() {
        pet_info.happiness += 2; // Increase pet happiness
        pet_info.weight += 1; // Increase pet weight
        animatePet("bounce");
        showNotification("Yum! Treats make me happy!")
        checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
        pet_info.happiness += 3; // Increase pet happiness
        pet_info.weight = Math.max(0, pet_info.weight - 1); // Decrease pet weight
        pet_info.energy = Math.max(0, pet_info.energy - 2);
        animatePet("bounce");
        showNotification("Playtime is the best!");
        checkAndUpdatePetInfoInHtml();
        
    }
    
    function clickedNapButton() {
           pet_info.energy += 3; // Increase pet energy
           pet_info.happiness += 1; // Increase pet happiness
           animatePet("pulsate");
           showNotification("Zzz... I feel refreshed!");
           checkAndUpdatePetInfoInHtml();
        }

    function clickedExerciseButton() {
          pet_info.happiness = Math.max(0, pet_info.happiness - 1); // Decrease pet happiness
          pet_info.weight = Math.max(0, pet_info.weight - 2); // Decrease pet weight
          pet_info.energy = Math.max(0, pet_info.energy - 3);
          animatePet("shake");
          showNotification("That was a good workout!");
          checkAndUpdatePetInfoInHtml();
        }
    
    function checkWeightAndHappinessBeforeUpdating() {
         pet_info.weight = Math.max(0, pet_info.weight);
         pet_info.happiness = Math.max(0, pet_info.happiness);
         pet_info.energy = Math.max(0, pet_info.energy); // Add conditional so if weight is lower than zero.
       }
    
    // Updates your HTML with the current values in your pet_info object
       function updatePetInfoInHtml() {
         $('.name').text(pet_info['name']);
         $('.weight').text(pet_info['weight']);
         $('.happiness').text(pet_info['happiness']);
         $('.energy').text(pet_info['energy']);
       }

    // Mood-based styling
    function updateMoodStyling() {
        if (pet_info.happiness >= 8) {
            $("body").css("background-color", "#d0f0c0"); // happy green
        } else if (pet_info.happiness <= 3) {
            $("body").css("background-color", "#fdd"); // sad red
        } else {
            $("body").css("background-color", "#fff"); // neutral
        }
    }
    
    // Animate pet image
    function animatePet(effectType) {
        $(".pet-image").effect(effectType, {times: 2}, 300);
    }
    
    function showNotification(message) {
        $('.notification')
        .hide()
        .text(message)
        .fadeIn(400)  // jQuery method #1
        .delay(1200)  // jQuery method #2
        .fadeOut(400);
        
    }
    
    function checkAndUpdatePetInfoInHtml() {
        checkWeightAndHappinessBeforeUpdating();
        updatePetInfoInHtml();
        updateMoodStyling();
    }

  });
  

  

    
    
    
    

    
    
   
    
   





  
