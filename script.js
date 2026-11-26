$(function () {
    checkAndUpdatePetInfoInHtml();
    // HW10 Console Messages
    console.log("Project loaded");

    console.info("Morris initialized");

    console.warn("Demo warning message");

    console.error("Demo error message");

    console.table([
        {
            name: pet_info.name,
            weight: pet_info.weight,
            happiness: pet_info.happiness,
            energy: pet_info.energy
        }
    ]);

    console.group("Pet Information");
    console.log("Name:", pet_info.name);
    console.log("Weight:", pet_info.weight);
    console.groupEnd();

    console.log(
        "%cMorris is Awesome!",
        "color:white;background:green;padding:5px;font-size:16px;"
    );

    $(".treat-button").click(clickedTreatButton);
    $(".play-button").click(clickedPlayButton);
    $(".exercise-button").click(clickedExerciseButton);
    $(".sleep-button").click(clickedSleepButton);

    /*
      jQuery Method #1: mouseenter()
    */
    $(".pet-image").mouseenter(function () {

        var messages = [
            "Hi! I'm Morris!",
            "Got any ticks?",
            "Let's play dead!",
            "I need a nap!",
            "You are my favorite human :D"
        ];

        var randomMessage =
            messages[Math.floor(Math.random() * messages.length)];

        $(".pet-message").text(randomMessage);

    });
});


/* Required object */

var pet_info = {

    name: "Morris",
    weight: 15,
    happiness: 10,
    energy: 10

};


function clickedTreatButton() {

    console.info("Treat button clicked");

   pet_info.happiness += 2;
    pet_info.weight += 1;

    showMessage("Morris loved that treat!");
    createEffect("🍪");
    checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {

    console.log("Play button clicked");

    pet_info.happiness += 3;
    pet_info.weight -= 1;
    pet_info.energy -= 2;

    showMessage("Morris had a blast!");
    createEffect("🎾");
    checkAndUpdatePetInfoInHtml();
}


function clickedExerciseButton() {

    console.warn("Exercise button clicked");

    pet_info.happiness -= 1;
    pet_info.weight -= 2;
    pet_info.energy -= 2;

    showMessage("Morris got some exercise!");
    createEffect("💪");
    checkAndUpdatePetInfoInHtml();
}


/* New action button */
function clickedSleepButton() {

    console.log("Sleep button clicked");

    pet_info.energy += 5;
    pet_info.happiness += 2;
    pet_info.weight += 1;

    showMessage("Morris feels refreshed!");
    createEffect("😴");
    checkAndUpdatePetInfoInHtml();
}


function showMessage(message) {

    $(".pet-message").text(message);

}


function checkAndUpdatePetInfoInHtml() {

    checkPetValues();
    updatePetInfoInHtml();

}


/* Prevent negative values */

function checkPetValues() {

    if (pet_info.weight < 0) {
        pet_info.weight = 0;
    }

    if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
    }

    if (pet_info.energy < 0) {
        pet_info.energy = 0;
    }

}


function updatePetInfoInHtml() {

    $(".name").text(pet_info.name);
    $(".weight").text(pet_info.weight);
    $(".happiness").text(pet_info.happiness);
    $(".energy").text(pet_info.energy);

    /* Mood updates based on happiness */

    if (pet_info.happiness >= 20) {

        $(".mood").text("🤩 Excited");

    }
    else if (pet_info.happiness >= 10) {

        $(".mood").text("😊 Happy");

    }
    else {

        $(".mood").text("😴 Sleepy");

    }

}


/*
   Creates a temporary visual effect.

   jQuery Method #2: remove()

   remove() permanently removes an element
   from the webpage after 2 seconds.
*/

function createEffect(icon) {

    $(".pet-image-container").append(
        "<div class='star temporary-star'>" +
        icon +
        "</div>"
    );

    setTimeout(function () {

        $(".temporary-star").remove();

    }, 2000);

}