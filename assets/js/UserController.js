app.controller('UserController',['userService','$mdBottomSheet','$mdSidenav',function(userService, $mdBottomSheet, $mdSidenav){
    var self = this;

    this.selected     = null;
    this.users        = [ ];


    this.selectUser = function (user) {
        this.selected = user;
    };


    this.shareContact = function (selectedUser) {
        //console.log(selectedUser);
       $mdBottomSheet.show({
           controllerAs: "vm",
           controller: "ContactSheetController",
           templateUrl: 'assets/view/contactSheet.html',
           locals: {
               Item: selectedUser
           }
       });
    };
    
    this.toggleList = function () {
        $mdSidenav('left').toggle();
    }


    userService
        .loadAllUsers()
        .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
        });


}]);


app.controller('ContactSheetController',['$mdBottomSheet','Item',function ($mdBottomSheet,Item) {
    console.log(Item);
    this.user = Item;
    console.log(this.user);
    this.items = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/img/phone.svg'},
        { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/img/twitter.svg'},
        { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/img/google_plus.svg'},
        { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/img/hangouts.svg'}
    ];

    this.closeBottomSheet = function () {
        console.log('close');
        $mdBottomSheet.hide();
    }


}]);