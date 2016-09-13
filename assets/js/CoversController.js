app.controller('CoversController',['coverService',function(coverService) {
    var self = this;

    this.selected = null;
    this.covers = [];

    this.current = this.covers[2];

    this.covers = [
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: -2
        },
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: -1
        },

        {
            name: 'Fear of the walking dead',
            avatar: 'walkingdead',
            content: 'walkingdead',
            active: true,
            offset: 0
        },
        {
            name: 'Billions',
            avatar: 'billions',
            content: 'billions',
            active: false,
            offset: 1
        },
        {
            name: 'girls',
            avatar: 'girls',
            content: 'girls',
            active: false,
            offset: 2
        },
        {
            name: 'Los soprano',
            avatar: 'los_soprano',
            content: 'los soprano',
            active: false,
            offset: 3
        },
        {
            name: 'true detective',
            avatar: 'true_detective',
            content: 'walkingdead',
            active: false,
            offset: 4
        },
        {
            name: 'blacksails',
            avatar: 'blacksails',
            content: 'blacksails',
            active: false,
            offset: 5
        },
        {
            name: 'Fear of the walking dead2',
            avatar: 'walkingdead2',
            content: 'walkingdead2',
            active: false,
            offset: 6
        },
        {
            name: 'Billions2',
            avatar: 'billions2',
            content: 'billions2',
            active: false,
            offset: 7
        },
        {
            name: 'girls2',
            avatar: 'girls2',
            content: 'girls2',
            active: false,
            offset: 8
        },
        {
            name: 'Los soprano2',
            avatar: 'los_soprano2',
            content: 'los soprano2',
            active: false,
            offset: 9
        },
        {
            name: 'true detective2',
            avatar: 'true_detective2',
            content: 'walkingdead2',
            active: false,
            offset: 10
        },
        {
            name: 'blacksails2',
            avatar: 'blacksails2',
            content: 'blacksails2',
            active: false,
            offset: 11
        },
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: 12
        },
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: 13
        },


    ];



    /**coverService
        .loadAllCovers()
        .then( function( covers ) {
            self.covers    = [].concat(covers);
            self.selected = covers[0];
            //console.log(self.covers);

        });**/



    

    this.moverDerecha = function ($event) {
        //console.log(this.covers[0].offset);
        // actualizamos desplazamiento ++
        console.log(this.covers[this.covers.length-1].offset);
        if(this.covers[this.covers.length-1].offset !== 2){
            for (var i = 0, l = this.covers.length; i < l; i++) {
                this.covers[i].offset-- ;
                TweenLite.to('#film_'+i, 0.5, {x: '-=100%'});
                if(this.covers[i].offset === 0){
                    TweenLite.to('#film_'+i, 0, {className:'+=active', scale:0.95});

                    TweenLite.to('#film_'+(i+1), 0, {className:'-=active', scale:0.85});
                    TweenLite.to('#film_'+(i-1), 0, {className:'-=active', scale:0.85});
                }
            }
        }

        //console.log(this.covers);




        //$('.active').removeClass('active');
        //$($event.currentTarget).addClass('active');
        //var scrollTo = $($event.currentTarget)        // retrieve the jquery ref to the div
        //    .toggleClass('active')       // change its bg
        //    .position().left;

        //console.log($($event.currentTarget).offset().left - ( $(window).width() - $($event.currentTarget).outerWidth(true) ) / 2 );

        //$('.scroller').animate({ scrollLeft: $($event.currentTarget).offset().left - ( $(window).width() - $($event.currentTarget).outerWidth(true) ) / 2  }, 800);


        //$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 200);


        //$($event.currentTarget).toggleClass('active');
        //$($event.currentTarget.nextElementSibling).removeClass('active');
        //$($event.currentTarget.previousElementSibling).removeClass('active');
    }

    this.moverIzquierda = function () {
        //console.log(this.covers[0].offset);




        console.log(this.covers[0].offset);
        if(this.covers[0].offset !== -2){
            for (var i = 0, l = this.covers.length; i < l; i++) {
                this.covers[i].offset++ ;
                TweenLite.to('#film_'+i, 0.5, {x: '+=100%'});
                if(this.covers[i].offset === 0){
                    TweenLite.to('#film_'+i, 0, {className:'+=active', scale:0.95});
                    TweenLite.to('#film_'+(i+1), 0, {className:'-=active', scale:0.85});
                    TweenLite.to('#film_'+(i-1), 0, {className:'-=active', scale:0.85});
                }
            }
        }

        //console.log(this.covers);



        //$('.active').removeClass('active');
        //$($event.currentTarget).addClass('active');
        //var scrollTo = $($event.currentTarget)        // retrieve the jquery ref to the div
        //    .toggleClass('active')       // change its bg
        //    .position().left;

        //console.log($($event.currentTarget).offset().left - ( $(window).width() - $($event.currentTarget).outerWidth(true) ) / 2 );

        //$('.scroller').animate({ scrollLeft: $($event.currentTarget).offset().left - ( $(window).width() - $($event.currentTarget).outerWidth(true) ) / 2  }, 800);


        //$('html,body').animate({ scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  }, 200);


        //$($event.currentTarget).toggleClass('active');
        //$($event.currentTarget.nextElementSibling).removeClass('active');
        //$($event.currentTarget.previousElementSibling).removeClass('active');
    }





}]);