// var counter = 0;
// var wholePage = {

//   onReady: function(){
//     wholePage.setUpWelcome();
//     wholePage.typeWelcome();
//     $('a[href="#"]').click(wholePage.scrollToSection);
//     $('a[href="changeimage"]').on("click", wholePage.changeImage);
//     $('.top').hover(wholePage.showHiddenInfo);
//   },

//   setUpWelcome: function(){
//     $('.showAfter').hide();
//     $('#hiddenphotos').hide();
//     // var height = window.innerHeight
//     // $('.welcome').height(height);
//     // $('.aboutMe').height(height);
//     // $('.projects').height(height);
//     // $('.skills').height(height);
//     // $('.contactMe').height(height);
//   },

//   typeWelcome: function(){
//     $(".typeit").typed({
//         strings: ["Car·o·lyn Ga·non"],
//         typeSpeed: 50
//         });
//     window.setTimeout(function(){$('.showAfter').show()}, 2200)
//   },

//   scrollToSection: function(event){
//     event.preventDefault();
//     var sectionId = this.id
//     $(this).addClass('active ')
//     $(document.body).animate({
//       'scrollTop' : $('.'+ sectionId +'').offset().top}, 1000);
//   },

//   changeImage: function(event, ui){
//     event.preventDefault();
//     var photos = ["images/eyepatch.jpg", "images/nerd.jpg", "images/redtie.jpg", "images/music.jpg"];
//     if(counter <= 3){
//       $('#clickandchange').attr("src", photos[counter])
//       counter++;
//     }else{
//       counter = 0;
//       $('#clickandchange').attr("src", "images/bwphoto.jpg")
//     }
//   },

//   showHiddenInfo: function(event) {
//     var hoverId = this.id;
//     var classId = '.' + this.id;
//        $(classId).toggle();
//   }
// }




// $(document).ready(wholePage.onReady);

