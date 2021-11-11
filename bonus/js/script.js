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
                contatore :0
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum',
                contatore: 1
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                contatore: 2
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                contatore: 3
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                contatore: 4
            }

        ] 
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
       
    }

});


