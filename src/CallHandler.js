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
	if (response.ok){
		return Promise.resolve(response.json());
	}
	else{
		return Promise.reject(response.json());
	}
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
 * @param state_id The id returned from getStates
 * @returns Promise
 * @description Fetches districts in the state.
 */
CallHandler.getDistricts = (state_id) =>{
	return CallHandler.call({path:`/v2/admin/location/districts/${state_id}`});
};
/**
 * 
 * @param pincode PIN code
 * @param date Date to search
 * @returns Promise
 * @description Vaccination sessions by PIN
 */
CallHandler.findCenterByPIN= (pincode,date)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`});
};
/**
 * 
 * @param district_id Id returned from getDistricts
 * @param date Date to search
 * @returns Promise
 * @description Vaccination sessions by district
 */
CallHandler.findCenterByDistrict=(district_id,date)=>{
	return CallHandler.call({path:`​api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`});
};
/**
 * 
 * @param lat Latitude
 * @param long Longitude
 * @returns Promise
 * @description vaccination sessions by Geo Location
 */
CallHandler.findCenterByGeoLocation = (lat,long)=>{
	return CallHandler.call({path:`api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${long}`});
};
/**
 * 
 * @param pincode PIN
 * @param date Date to search
 * @returns Promise
 * @description Vaccination sessions by PIN for 7 days
 */
CallHandler.findSessionByPIN = (pincode,date)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`});
};
/**
 *  
 * @param district_id District id from getDistrict
 * @param date Date to search
 * @returns Promise
 * @description Vaccination sessions by district for 7 days
 */
CallHandler.findSessionByDistrict = (district_id,date)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district_id}&date=${date}`});
};
/**
 * 
 * @param center_id Vaccine Center id
 * @param date Date to search
 * @returns Promise
 * @description Vaccination sessions by center for 7 days
 */
CallHandler.findSessionByCenter = (center_id,date)=>{
	return CallHandler.call({path:`api/v2/appointment/sessions/public/calendarByCenter?center_id=${center_id}&date=${date}`});
}

export default  CallHandler ;