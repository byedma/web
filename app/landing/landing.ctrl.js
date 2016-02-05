angular.module("appLanding").controller("landingController", function($scope, $timeout){
    
    
        $scope.slides = [
                {image: 'app/landing/images/Habit-Jogging.jpg', description: 'Habit-Jogging'},
                {image: 'app/landing/images/Hobby-Photography.jpg', description: 'Hobby-Photography'},
                {image: 'app/landing/images/Program-Osteoporosis.jpg', description: 'Program-Osteoporosis'},
                {image: 'app/landing/images/Routine-Yoga.jpg', description: 'Routine-Yoga'},
                {image: 'app/landing/images/Challenge-10K.jpg', description: 'Challenge-10K'}
            ];

        $scope.direction = 'left';

        $scope.currentIndex = 0;
        $scope.$watch($scope.currentIndex);

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
                
        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    
        $scope.init = function () {

            $scope.setCurrentSlideIndex($scope.currentIndex+1);
            $timeout($scope.init, 3000)
            
        };

        
    $timeout($scope.init, 3000)
    
});


