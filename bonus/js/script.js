// creo istanza vue
// inserisco in data l array di oggetto 
// aggiungo activeSlide per tener traccia dell indice su active 
// creo funzioni al click del bottone



// Istanza vue collegata al mio div con id app 
var carousel = new Vue ({
    el: "#app",
    data: {
        activeSlide : 0,
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                 
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
            
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
             
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
              
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            
            }

        ] ,
        // playerActive : "",
        activePlay : "player_none",
        activePause : "player_none",
    },
    methods : {
        nextSlide:function(){
            if ( this.activeSlide >= this.slides.length - 1){
                this.activeSlide = 0
            } else {
                this.activeSlide ++;
            }
            
        },
        prevSlide:function(){
            if ( this.activeSlide === 0 ){
                this.activeSlide = this.slides.length - 1
            } else {
                this.activeSlide --;
            }
            
        },
        play:function(){
            this.go = setInterval(() => {
                if ( this.activeSlide >= this.slides.length - 1){
                    this.activeSlide = 0
                } else {
                    this.activeSlide ++;
                }
            }, 3000);
            if ( this.activePlay === "player_none") {
                this.activePlay = "player_active"
                this.activePause = "player_none"
            } else {
                this.activePlay = "player_none";
            }
            
        },
        stop:function(){
            clearInterval(this.go);
            if ( this.activePause === "player_none") {
                this.activePause = "player_active"
                this.activePlay = "player_none"
            } else {
                this.activePause = "player_none";
            }
        }
       
    },
    // mounted() {
    //     var stop = setInterval(() => {
    //         if ( this.activeSlide >= this.slides.length - 1){
    //             this.activeSlide = 0
    //         } else {
    //             this.activeSlide ++;
    //         }
    //     }, 3000);
    //   },
      
});
