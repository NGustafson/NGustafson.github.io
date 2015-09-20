angular.module('randomSelecter', []).controller(
		'randomSelecterController',
		function($scope, $document, $window) {
			var randSelect = this;

			randSelect.addItem = function() {
				randSelect.items.push({
					text : randSelect.itemText,
					checked : false
				});
				randSelect.itemText = '';
			}
			
			randSelect.removeItem = function(item) {
				for (var i = 0; i < randSelect.items.length; i++) {
					if (randSelect.items[i] == item) {
						randSelect.items.splice(i, 1);
						break;
					}
				}
			}

			randSelect.selectItem = function() {
				console.log("Selecting item");
				var tempList = [];
				for (var i = 0; i < randSelect.items.length; i++) {
					if (randSelect.items[i].checked) {
						tempList.push(randSelect.items[i]);
					}
				}
				randSelect.selectedItem = tempList[Math.floor(Math
						.random()
						* tempList.length)];

			}
			
			angular.element(document).ready(function() {
				cookieList = JSON.parse(document.cookie);
				randSelect.items = [];
				
				for (var i = 0; i < cookieList.length; i++) {
					randSelect.items.push({
						text : cookieList[i].text,
						checked : cookieList[i].checked
					});
				}
				console.log(randSelect.items);
				$scope.$apply();
			})
			
			$window.onunload = function() {
				document.cookie = JSON.stringify(randSelect.items);
			}
		});