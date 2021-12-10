// function playHeavyRainn(){
//     if (HeavyRainn.paused) {
//         HeavyRainn.play();
//     }
//     else {
//         HeavyRainn.pause();
//     }
//     HeavyRainn.loop = true;
// };

// function playCricketss(){
//     if (Cricketss.paused) {
//         Cricketss.play();
//     }
//     else {
//         Cricketss.pause();
//     }
//     Cricketss.loop = true;
// };

// function playRainn(){
//     if (Rainn.paused) {
//         Rainn.play();
//     }
//     else {
//         Rainn.pause();
//     }
//     Rainn.loop = true;
// };

// function playWaterr(){
//     if (Waterr.paused) {
//         Waterr.play();
//     }
//     else {
//         Waterr.pause();
//     }
//     Waterr.loop = true;
// };

// function playSeaa(){
//     if (Seaa.paused) {
//         Seaa.play();
//     }
//     else {
//         Seaa.pause();
//     }
//     Seaa.loop = true;
// };

// function playStormm(){
//     if (Stormm.paused) {
//         Stormm.play();
//     }
//     else {
//         Stormm.pause();
//     }
//     Stormm.loop = true;
// };

// function playWindd(){
//     if (Windd.paused) {
//         Windd.play();
//     }
//     else {
//         Windd.pause();
//     }
//     Windd.loop = true;
// };
// function playCampfiree(){
//     if (Campfiree.paused) {
//         Campfiree.play();
//     }
//     else {
//         Campfiree.pause();
//     }
//     Campfiree.loop = true;
// };

// function playDrivingg(){
//     if (Drivingg.paused) {
//         Drivingg.play();
//     }
//     else {
//         Drivingg.pause();
//     }
//     Drivingg.loop = true;
// };

// function playKeyboardd(){
//     if (Keyboardd.paused) {
//         Keyboardd.play();
//     }
//     else {
//         Keyboardd.pause();
//     }
//     Keyboardd.loop = true;
// };


// function playReloadingg() {

//     if (Reloadingg.paused) {
//         Reloadingg.play();
//     }
//     else {
//         Reloadingg.pause();
//     }
//     Reloadingg.loop = true; 
// };

// function playWhiteNoisee(){
//     if (WhiteNoisee.paused) {
//         WhiteNoisee.play();
//     }
//     else {
//         WhiteNoisee.pause();
//     }
//     WhiteNoisee.loop = true;
// };

// function playCalmForestt(){
//     if (CalmForestt.paused) {
//         CalmForestt.play();
//     }
//     else {
//         CalmForestt.pause();
//     }
//     CalmForestt.loop = true;
// };

// function playFarmAnimalss(){
//     if (FarmAnimalss.paused) {
//         FarmAnimalss.play();
//     }
//     else {
//         FarmAnimalss.pause();
//     }
//     FarmAnimalss.loop = true;
// };

// function playWalkingg(){
//     if (Walkingg.paused) {
//         Walkingg.play();
//     }
//     else {
//         Walkingg.pause();
//     }
//     Walkingg.loop = true;
// };

// function playPurringg(){
//     if (Purringg.paused) {
//         Purringg.play();
//     }
//     else {
//         Purringg.pause();
//     }
//     Purringg.loop = true;
// };

// function playSeagullss(){
//     if (Seagullss.paused) {
//         Seagullss.play();
//     }
//     else {
//         Seagullss.pause();
//     }
//     Seagullss.loop = true;
// };

// function playTranquilityy(){
//     if (Tranquilityy.paused) {
//         Tranquilityy.play();
//     }
//     else {
//         Tranquilityy.pause();
//     }
//     Tranquilityy.loop = true;
// };

let audio = document.getElementById("Rainn");

let volume = document.querySelector("#volume-controlHR");
volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
})


// custom code by codedays 


$('button', $('#btnNest')).each(function (s) {
    console.log($(this)); //log every element found to console output
    console.log(this.id);
    let Elementid = this.id;
    const volumeHandler = document.getElementById(`${Elementid}`);
    var htmlToAppend = `<div class="volumeSlider-${Elementid} text-center">
    <input type="range" min="0" max="100" value="50" id="volume-${Elementid}" class="slider " style="font-size: small !important;">
    </div>`;

    volumeHandler.innerHTML += `<br/><br/><br/><br/><br/><br/>` + htmlToAppend;
    console.log(volumeHandler);

});




document.querySelectorAll('button').forEach(function(field) {
    field.addEventListener('click', function(e) {
       
        let trackID = $(this).attr('id');
        let volumeAmount = $("#volume-" + trackID).val();
        let el = document.getElementById(`${trackID}-Track`);
console.log(volumeAmount);
        

        if($(e.target).is('#volume-' + trackID)){
            // your child span is being hovered over
            console.log('slider volume')
            volumeAmount = $("#volume-" + trackID).val();
            el.volume = volumeAmount / 100;
            console.log(volumeAmount)
            e.stopPropagation();
        }else if($(e.target).is('button')){
            // your parent element is being hovered over
            console.log('main button')

       
           
            console.log(trackID);
            
          let status = $("#" + trackID).hasClass("play") 
        console.log(status)
   
        
        if(!status) {
          el.play();
            $("#" + trackID).switchClass('pause','play');
            $("#" + trackID).switchClass('btnidle','btntouch');
            el.volume = volumeAmount / 100;
            
        } else { 
            el.pause();
            $("#" + trackID).switchClass('play','pause');
            $("#" + trackID).switchClass('btntouch','btnidle');
        }

        }
    });
  })

// end custom code 