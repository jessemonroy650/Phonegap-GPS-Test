//
//
//
var Location = {
	// Settings
	geoLocationOption : {maximumAge: 20000, 	// 20 seconds
						timeout: 10000, 		// 10 seconds
						enableHighAccuracy: true},
	watchID : null,
    callback: {'onSuccess':'','onError':''},
	//
	init : function (succ, err) {
		if ((typeof succ === 'function') && (typeof err === 'function')) {
			//console.log("got both functions");
            this.callback['onSuccess'] = succ;
            this.callback['onError']   = err;
		} else {
			alert("Location.init: one or both callbacks failed");
		}
    },
	//
	//	Hook to our Location/GPS functions
	//
	getLocation : function () {
		navigator.geolocation.getCurrentPosition(this.callback.onSuccess, this.callback.onError, this.geoLocationOption);
	},

	watchLocation : function () {
		alert('watch');
		this.watchID = navigator.geolocation.watchPosition(this.callback.onSuccess, this.callback.onError, this.geoLocationOption);
	},

	clearWatch : function () {
		navigator.geolocation.clearWatch(this.watchID);
	}
};
