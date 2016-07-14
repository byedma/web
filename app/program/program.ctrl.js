angular.module("appProgram").controller("programController", ['$scope', '$resource', '$rootScope', '$window', '$mdDialog', '$mdMedia', 'programService', 'habitService', 'hobbyService', 'challengeService', 'routineService', function ($scope, $resource, $rootScope, $window, $mdDialog, $mdMedia, programService, habitService, hobbyService, challengeService, routineService) {

    $scope.programList = null;
    $scope.programServiceList = null;
    $scope.programReviewList = null;
    $scope.programInFocus = null;
    $scope.programComponentList = null;

    var init = function () {
        console.log("i am in program init");
        programService.programList()
            .then(
                function (response) {
                    $scope.programList = response;
                    console.log($scope.programList);
                },
                function (err) {
                    console.log('error retrieving the hobbies: ', err);
                }
            )
    }

    $scope.programReviews = function (programid) {
        console.log("in program review list service")
        console.log("program id in context is " + programid)
        programService.programReviewList(x)
            .then(
                function (response) {
                    $scope.programReviewList = response;
                    console.log($scope.programReviewList);
                },
                function (err) {
                    console.log('error retrieving program reviews: ', err);
                }
            )

    }

    $scope.newProgramServiceDetails = {};

    $scope.subscribeToProgram = function (hob) {
        $scope.newProgramServiceDetails.program_id = 2;
        $scope.newProgramServiceDetails.user_id = 6;
        $scope.newProgramServiceDetails.nick_name = "just a joke";
        $scope.newProgramServiceDetails.status = "E";
        $scope.newProgramServiceDetails.end_date = "2016-02-19"
        console.log($scope.newProgramServiceDetails);
        //fields = ('id', 'program_id', 'user_id', 'nick_name', 'status', 'end_date', 'creation_timestamp')
        programService.subscribeProgram($scope.newProgramServiceDetails)
            .then(
                function (response) {

                    $scope.programSubscribeResult = response;
                    console.log($scope.programSubscribeResult);

                },
                function (err) {
                    console.log('error subscribing to the program: ', err);
                }
            )
    }
    $scope.activeParentIndex;
    $scope.showProgramReviews = function (programIndex, program) {
        x = program.id;
        console.log("program id in the context is " + x);
        $scope.programReviews(x);
        $scope.activeProgramIndex = programIndex;
    }

    $scope.isShowing = function (programIndex) {
        return $scope.activeProgramIndex === programIndex;
    };
    // program detail page

    $scope.programDetail = function (program) {

        console.log("id of the program selected is " + program.id);

        x = program.id;
        y = 0;
        //let us get program components

        programService.programComponentList(x)
            .then(
                function (response) {
                    $scope.programComponentList = response;
                    console.log($scope.programComponentList);
                    y = $scope.programComponentList.length;
                    console.log("the length of the array is " + y);
                    if (y > 0) {
                        $scope.loadComponents(y);
                    }

                },
                function (err) {
                    console.log('error retrieving program components: ', err);
                }
            )
    }

    $scope.loadComponents = function (y) {

        $scope.habitsInFocus = new Array();
        $scope.hobbysInFocus = new Array();
        $scope.routinesInFocus = new Array();
        $scope.challengesInFocus = new Array();

        for (var i = 0; i <= y; i++) {
            componenttype = $scope.programComponentList[i].component_type;
            componentid = $scope.programComponentList[i].component_id;
            if (componenttype == "HA") {

                habitService.habitDetail(componentid)
                    .then(
                        function (response) {
                            $scope.habitInFocus = response;
                            console.log($scope.habitInFocus);
                            $scope.habitsInFocus.push($scope.habitInFocus);
                            console.log($scope.habitsInFocus)
                        },
                        function (err) {
                            console.log('error retrieving the habits: ', err);
                        }
                    )
            } else if (componenttype == "HO") {
                hobbyService.hobbyDetail(componentid)
                    .then(
                        function (response) {
                            $scope.hobbyInFocus = response;
                            console.log($scope.hobbyInFocus);
                            $scope.hobbysInFocus.push($scope.hobbyInFocus);
                            console.log($scope.hobbysInFocus)
                        },
                        function (err) {
                            console.log('error retrieving the hobbies: ', err);
                        }
                    )
            } else if (componenttype == "RO") {
                routineService.routineDetail(componentid)
                    .then(
                        function (response) {
                            $scope.routineInFocus = response;
                            console.log($scope.routineInFocus);
                            $scope.routinesInFocus.push($scope.routineInFocus);
                            console.log($scope.routinesInFocus);
                        },
                        function (err) {
                            console.log('error retrieving the routines: ', err);
                        }
                    )

            } else if (componenttype == "CH") {
                challengeService.challengeDetail(componentid)
                    .then(
                        function (response) {
                            $scope.challengeInFocus = response;
                            console.log($scope.challengeInFocus);
                            $scope.challengesInFocus.push($scope.challengeInFocus);
                            console.log($scope.challengesInFocus)
                        },
                        function (err) {
                            console.log('error retrieving the challenges: ', err);
                        }
                    )
            }

        }

    }
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showAlert = function (ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('This is an alert title')
            .textContent('You can specify some description text in here.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
            .targetEvent(ev)
        );
    };
    $scope.hideDialog = $mdDialog.hide;
   
    $scope.showTabDialog = function (ev, h) {
        $scope.programDetail(h);
        $mdDialog.show({
                controller: DialogController,
                controllerAs: 'ctrl',
                scope: this,
                templateUrl: 'app/program/programdetail.html',
                parent: angular.element(document.body),
                targetEvent: ev,                
                bindToController: true,
                clickOutsideToClose: true,
                preserveScope: true
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
    };

    init();

}]);

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}