const SERVER_URL='https://cdn-api.co-vin.in/';
const CallHandler = {};

/**
 * 
 * @param {*} opts All params taken by fetch
 * @returns Promise
 */
CallHandler.call=async (opts)=>{
	let fetchObject = {'method':'GET'};
	Object.keys(opts).filter((key) => {
      if (['method', 'mode', 'cache', 'credentials', 'headers', 'redirect', 'referrerPolicy', 'body'].indexOf(key) != -1) return true
  }).forEach(element => {
				if(element!='body'){
					fetchObject[element]=opts[element];
				}
				else{
					fetchObject[element]=JSON.stringify(opts[element]);
				}
	});
	const response = await fetch(`${SERVER_URL}${opts.path}`, fetchObject);
	return response.json();
};
/**
 * 
 * @returns Promise
 * @description Fetches all States
 */
CallHandler.getStates = ()=>{
	return CallHandler.call({path:'api/v2/admin/location/states'});
};
/**
 * 
 * @param {*} opts 
 * @param opts.state_id The id returned from getStates
 * @returns Promise
 * @description Fetches districts in the state.
 */
CallHandler.getDistricts = (opts) =>{
	return CallHandler.call({path:`/v2/admin/location/districts/${opts.state_id}`});
};
/**
 * 
 * @param {*} opts 
 * @param opts.pincode PIN code
 * @param opts.date Date to search
 * @returns Promise
 * @description Vaccination sessions by PIN
 */
CallHandler.findCenterByPIN= (opts)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/findByPin?pincode=${opts.pincode}&date=${opts.date}`});
};
/**
 * 
 * @param {*} opts 
 * @param opts.district_id Id returned from getDistricts
 * @param opts.date Date to search
 * @returns Promise
 * @description Vaccination sessions by district
 */
CallHandler.findCenterByDistrict=(opts)=>{
	return CallHandler.call({path:`​api/v2/appointment/sessions/public/findByDistrict?district_id=${opts.district_id}&date=${opts.date}`});
};
/**
 * 
 * @param {*} opts 
 * @param opts.lat Latitude
 * @param opts.long Longitude
 * @returns Promise
 * @description vaccination sessions by Geo Location
 */
CallHandler.findCenterByGeoLocation = (opts)=>{
	return CallHandler.call({path:`api/v2/appointment/centers/public/findByLatLong?lat=${opts.lat}&long=${opts.long}`});
};
/**
 * 
 * @param {\} opts 
 * @param opts.pincode PIN
 * @param opts.date Date to search
 * @returns Promise
 * @description Vaccination sessions by PIN for 7 days
 */
CallHandler.findSessionByPIN = (opts)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/calendarByPin?pincode=${opts.pincode}&date=${opts.date}`});
};
/**
 * 
 * @param {*} opts 
 * @param opts.district_id District id from getDistrict
 * @param opts.date Date to search
 * @returns Promise
 * @description Vaccination sessions by district for 7 days
 */
CallHandler.findSessionByDistrict = (opts)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/calendarByDistrict?district_id=${opts.district_id}&date=${opts.date}`});
};
/**
 * 
 * @param {*} opts 
 * @param opts.center_id Vaccine Center id
 * @param opts.date Date to search
 * @returns Promise
 * @description Vaccination sessions by center for 7 days
 */
CallHandler.findSessionByCenter = (opts)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/calendarByCenter?center_id=${opts.center_id}&date=${opts.date}`});
}

export default  CallHandler ;