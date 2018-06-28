

let time = 0;
let hunger = 0;
let boredom = 0;
let sleepiness = 0;
let lightsToggle = true;


//////////////////////////////////////feed pet/////////////////////////////////
const feedPet = () => {
  if (hunger == 5) {
    alert("GAME OVER");
  } else {
    hunger --;
  }
  console.log('feed');
  $('#hungerLevel').text('Hunger: ' + hunger)
  };
  $('#feed').on('click', (e) => {
  feedPet();
  });
///////////////////////////////////turnLightOff////////////////////////////////
const turnLightOff = () => {
  console.log('lightsOff');
		if (lightsToggle === false) {
    $('#image').css('opacity','1');
    lightsToggle = true;
    } else {
    $('#image').css('opacity','0');
    lightsToggle = false;
    }
  };
  $('#lightsOff').on('click', (e) => {
    turnLightOff();
  });

//////////////////////////////////////play//////////////////////////////////////
const play = () => {
  if (boredom == 5) {
    alert("GAME OVER");
  } else {
    boredom --;
  }
  console.log('boredom decreased');
  $('#boredomLevel').text('Boredom: ' + boredom);
  };
  $('#play').on('click', (e) => {
  play();
  });
/////////////////////////////////////timer//////////////////////////////////////
const timePassing = () => {
		setInterval(function () {
		time ++;
    if (time == 20) {
    alert('GAME OVER')};
		$('#timer').text('Time: ' + time + ' s');
		}, 1*1000);
  };
//////////////////////////////////game metric//////////////////////////////////
const increaseHunger = () => {
		setInterval(function () {
     if (hunger == 5) {
        alert("GAME OVER");
      } else{
			hunger ++;
    }
	$('#hungerLevel').text('Hunger: ' + hunger);
  }, 1*1000);
	};

  const increaseBoredom = () => {
  		setInterval(function () {
       if (boredom == 5) {
          alert("GAME OVER");
        } else{
  			boredom ++;
      }
  	$('#boredomLevel').text('Boredom: ' + boredom);
   }, 1*1000);
  	};
//////////////////////////////////input/////////////////////////////////////////

$('form').on('submit', (e) => {
  e.preventDefault();
  $('#name').append($('#input-box').val());
  $('#age').append($('#input-box2').val());
  timePassing();
  increaseHunger();
  increaseBoredom();
});
