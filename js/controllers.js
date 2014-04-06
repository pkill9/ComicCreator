'use strict';

/* Controllers */
angular.module('myApp.controllers', [])
   .controller('HomeCtrl', ['$scope', 'syncData', function($scope, syncData) {
        
   }])

  .controller('ChatCtrl', ['$scope', 'syncData', function($scope, syncData) {
		
		var canvas, stage;
        var drawingCanvas;
        var oldPt;
        var oldMidPt;
        var title;
        var color;
        var stroke;
        var colors;
        var index;
		
		init();
		
		var context = canvas.getContext('2d');
		$scope.onClick1 = function()
		{
			context.clearRect(0, 0, canvas.width, canvas.height);
			var w = canvas.width;
			canvas.width = 1;
			canvas.width = w;
		}
		$scope.onClick2 = function()
		{
			context = canvas.getContext('2d');
			context.clear();
		}
		function toImage(){
		
		}
		
        function init() {
			console.log("Got Here");
            if (window.top != window) {
                document.getElementById("header").style.display = "none";
            }
            canvas = document.getElementById("myCanvas");
            index = 0;
            colors = ["#000000"];

            //check to see if we are running in a browser with touch support
            stage = new createjs.Stage(canvas);
            stage.autoClear = false;
            stage.enableDOMEvents(true);

            createjs.Touch.enable(stage);
            createjs.Ticker.setFPS(24);

            drawingCanvas = new createjs.Shape();

            stage.addEventListener("stagemousedown", handleMouseDown);
            stage.addEventListener("stagemouseup", handleMouseUp);

            stage.addChild(drawingCanvas);
            stage.update();
        }

        function stop() {}

        function handleMouseDown(event) {
            if (stage.contains(title)) { stage.clear(); stage.removeChild(title); }
            color = colors[(index++)%colors.length];
            stroke = 15;
            oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
            oldMidPt = oldPt;
            stage.addEventListener("stagemousemove" , handleMouseMove);
        }

        function handleMouseMove(event) {
            var midPt = new createjs.Point(oldPt.x + stage.mouseX>>1, oldPt.y+stage.mouseY>>1);

            drawingCanvas.graphics.clear().setStrokeStyle(stroke, 'round', 'round').beginStroke(color).moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

            oldPt.x = stage.mouseX;
            oldPt.y = stage.mouseY;

            oldMidPt.x = midPt.x;
            oldMidPt.y = midPt.y;

            stage.update();
        }

        function handleMouseUp(event) {
            stage.removeEventListener("stagemousemove" , handleMouseMove);
        }
   }])

   .controller('HomeCtrl', ['$scope', 'loginService', '$location', function($scope, loginService, $location) {
  
   }])

   .controller('AccountCtrl', ['$scope', 'loginService', 'syncData', '$location', function($scope, loginService, syncData, $location) {
      
   }   ]   );