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
				var userdata = getCookie("userdata");
				console.log(userdata);
			
				randSelect.items = [];
				
				if (userdata == "") {
					
				} else {
					var cookieList = JSON.parse(userdata);
					for (var i = 0; i < cookieList.length; i++) {
						randSelect.items.push({
							text : cookieList[i].text,
							checked : cookieList[i].checked
						});
					}
				}
				
				$scope.$apply();
			})
			
			$window.onunload = function() {
				document.cookie = "userdata=" + JSON.stringify(randSelect.items) + ";";
			}
		});

function getCookie(cname) {
	console.log(document.cookie);
	
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

