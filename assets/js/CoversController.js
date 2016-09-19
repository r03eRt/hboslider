app.controller('CoversController',['coverService',function(coverService) {
    var self = this;

    this.selected = null;
    this.covers = [];

    this.current = 2;
    console.log('puntero --> '+this.current);


    this.covers = [
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: -2,
            value:''
        },
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: -1,
            value:''
        },

        {
            name: 'AFear of the walking dead',
            avatar: 'walkingdead',
            content: 'walkingdead',
            active: true,
            offset: 0,
            value:1
        },
        {
            name: 'Billions',
            avatar: 'billions',
            content: 'billions',
            active: false,
            offset: 1,
            value:2
        },
        {
            name: 'Cgirls',
            avatar: 'girls',
            content: 'girls',
            active: false,
            offset: 2,
            value:3
        },
        {
            name: 'DLos soprano',
            avatar: 'los_soprano',
            content: 'los soprano',
            active: false,
            offset: 3,
            value:4
        },
        {
            name: 'Etrue detective',
            avatar: 'true_detective',
            content: 'walkingdead',
            active: false,
            offset: 4,
            value:5
        },
        {
            name: 'Fblacksails',
            avatar: 'blacksails',
            content: 'blacksails',
            active: false,
            offset: 5,
            value:6
        },
        {
            name: 'GFear of the walking dead2',
            avatar: 'walkingdead2',
            content: 'walkingdead2',
            active: false,
            offset: 6,
            value:7
        },
        {
            name: 'HBillions2',
            avatar: 'billions2',
            content: 'billions2',
            active: false,
            offset: 7,
            value:8
        },
        {
            name: 'Igirls2',
            avatar: 'girls2',
            content: 'girls2',
            active: false,
            offset: 8
        },
        {
            name: 'JLos soprano2',
            avatar: 'los_soprano2',
            content: 'los soprano2',
            active: false,
            offset: 9
        },
        {
            name: 'Ktrue detective2',
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
            name: 'Ktrue detective2',
            avatar: 'true_detective2',
            content: 'walkingdead2',
            active: false,
            offset: 12
        },
        {
            name: 'blacksails2',
            avatar: 'blacksails2',
            content: 'blacksails2',
            active: false,
            offset: 13
        },
        {
            name: 'blacksails2',
            avatar: 'blacksails2',
            content: 'blacksails2',
            active: false,
            offset: 14
        },
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: 15
        },
        {
            name: '',
            avatar: '',
            content: '',
            active: false,
            offset: 16
        },


    ];



    /**coverService
        .loadAllCovers()
        .then( function( covers ) {
            self.covers    = [].concat(covers);
            self.selected = covers[0];
            //console.log(self.covers);

        });**/


    this.changeCurrent = function (new_index) {
        console.log(this.current, this.covers);
        var current_index = 0;
        console.log(new_index);
        console.log('Actual '+this.current);
        console.log('Quiero ir '+new_index);
        var diff = (this.current - new_index);
        console.log('Diff '+diff);

        var abs = Math.abs(diff);

        if(diff < 0){
            console.log('voy derecha');
            console.log('diff->', Math.abs(diff)-2);
            for (var i = 0, l = this.covers.length; i < l; i++) {
                this.covers[i].offset = this.covers[i].offset-abs ;
                TweenLite.to('#film_'+i, 1, {x: '-='+ Math.abs(diff)*100+'%', ease:Power4.easeInOut});
                TweenLite.to('.card', 0.5, {className:'-=active', scale:0.85});
                if(this.covers[i].offset === 0){
                  current_index = i;
                }
            }
            TweenLite.to('#film_'+new_index, 1.8, {className:'+=active', scale:0.95});
            this.current = new_index;


        }else if( diff === 0){
            console.log('Nada');
        }else{
          console.log('voy derecha');
          console.log('diff->', Math.abs(diff)-2);
          for (var i = 0, l = this.covers.length; i < l; i++) {
              this.covers[i].offset = this.covers[i].offset+abs ;
              TweenLite.to('#film_'+i, 1, {x: '+='+ Math.abs(diff)*100+'%', ease:Power4.easeInOut});
              TweenLite.to('.card', 0.5, {className:'-=active', scale:0.85});
              if(this.covers[i].offset === 0){
                current_index = i;
              }
          }
          TweenLite.to('#film_'+new_index, 1.8, {className:'+=active', scale:0.95});
          this.current = new_index;
        }

    };






    this.move = function ($event,$index_click) {

        var movement = this.covers[this.current].offset + this.covers[$index_click].offset;

        if(movement === 1){
            this.moverDerecha($event,1);
        }else if(movement === 2){
            this.moverDerecha($event,2);
        }else if(movement === -1){
            this.moverIzquierda($event,1);
        }else if(movement === -2){
            this.moverIzquierda($event,2);
        }else if(movement === 0){
            console.log("No hago nada");
        }

        console.log(this.covers);
    };



    this.moverDerecha = function ($event, times) {

        if(this.covers[this.covers.length-1].offset !== 2){
            if(times === 2){
                for (var i = 0, l = this.covers.length; i < l; i++) {
                    this.covers[i].offset-- ;
                    TweenLite.to('#film_'+i, 1.2, {x: '-=100%', ease:Power4.easeInOut});
                    if(this.covers[i].offset === 0){
                        TweenLite.to('#film_'+i, 0.5, {className:'+=active', scale:0.95});
                        TweenLite.to('#film_'+(i+1), 0.5, {className:'-=active', scale:0.85});
                        TweenLite.to('#film_'+(i-1), 0.5, {className:'-=active', scale:0.85});
                        this.current = i;
                    }
                }
                for (var i = 0, l = this.covers.length; i < l; i++) {
                    this.covers[i].offset-- ;
                    TweenLite.to('#film_'+i, 1.2, {x: '-=200%', ease:Power4.easeInOut});
                    if(this.covers[i].offset === 0){
                        TweenLite.to('#film_'+i, 0.5, {className:'+=active', scale:0.95});
                        TweenLite.to('#film_'+(i+1), 0.5, {className:'-=active', scale:0.85});
                        TweenLite.to('#film_'+(i-1), 0.5, {className:'-=active', scale:0.85});
                        this.current = i;
                    }
                }
            }else{
                for (var i = 0, l = this.covers.length; i < l; i++) {
                    this.covers[i].offset-- ;
                    TweenLite.to('#film_'+i, 1.2, {x: '-=100%', ease:Power4.easeInOut});
                    if(this.covers[i].offset === 0){
                        TweenLite.to('#film_'+i, 0.5, {className:'+=active', scale:0.95});
                        TweenLite.to('#film_'+(i+1), 0.5, {className:'-=active', scale:0.85});
                        TweenLite.to('#film_'+(i-1), 0.5, {className:'-=active', scale:0.85});
                        this.current = i;
                    }
                }
            }

        }

        console.log('puntero --> '+this.current);

    }

    this.moverIzquierda = function ($event,times) {

        if(this.covers[0].offset !== -2){
            if(times === 2){
                for (var i = 0, l = this.covers.length; i < l; i++) {
                    this.covers[i].offset++ ;
                    TweenLite.to('#film_'+i, 1.2, {x: '+=100%', ease:Power4.easeInOut});
                    if(this.covers[i].offset === 0){
                        TweenLite.to('#film_'+i, 0.5, {className:'+=active', scale:0.95});
                        TweenLite.to('#film_'+(i+1), 0.5, {className:'-=active', scale:0.85});
                        TweenLite.to('#film_'+(i-1), 0.5, {className:'-=active', scale:0.85});
                        this.current = i;
                    }
                }
                for (var i = 0, l = this.covers.length; i < l; i++) {
                    this.covers[i].offset++ ;
                    TweenLite.to('#film_'+i, 1.2, {x: '+=200%', ease:Power4.easeInOut});
                    if(this.covers[i].offset === 0){
                        TweenLite.to('#film_'+i, 0.5, {className:'+=active', scale:0.95});
                        TweenLite.to('#film_'+(i+1), 0.5, {className:'-=active', scale:0.85});
                        TweenLite.to('#film_'+(i-1), 0.5, {className:'-=active', scale:0.85});
                        this.current = i;
                    }
                }
            }else{
                for (var i = 0, l = this.covers.length; i < l; i++) {
                    this.covers[i].offset++ ;
                    TweenLite.to('#film_'+i, 1.2, {x: '+=100%', ease:Power4.easeInOut});
                    if(this.covers[i].offset === 0){
                        TweenLite.to('#film_'+i, 0.5, {className:'+=active', scale:0.95});
                        TweenLite.to('#film_'+(i+1), 0.5, {className:'-=active', scale:0.85});
                        TweenLite.to('#film_'+(i-1), 0.5, {className:'-=active', scale:0.85});
                        this.current = i;
                    }
                }
            }

        }
        console.log('puntero --> '+this.current);
    }





}]);
