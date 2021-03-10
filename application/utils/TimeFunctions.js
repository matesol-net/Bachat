import database from '@react-native-firebase/database';

/**
 * Function that will return the current firebase server time
 *
 * @export
 * @return {*} 
 */
export function _getCurrentServerTime(){
    
    var timeDate = database().getServerTime();
    return timeDate;
    // var allmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    // var day = timeDate.getDate();
    // var monthIndex = timeDate.getMonth();
    // var year = timeDate.getFullYear();

    // var date = day + ' ' + allmonths[monthIndex] + ', ' + year;

    // //setting time in 12 hours format
    // var hours = timeDate.getHours();
    // var ampm = timeDate.getHours() >= 12 ? 'PM' : 'AM';
    // var hours = timeDate.getHours() % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    // var minutes = timeDate.getMinutes();
    // minutes = minutes < 10 ? '0'+minutes : minutes;

    // var time = hours + ':' + minutes + ' ' + ampm;

    // return(time + ' ' + date);
}

/**
 * Function that will format the date
 * @param {*} timeDate 
 */
export const _getFormattedDate = (timeDate) => {
    var allmonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    var day = timeDate.getDate();
    var monthIndex = timeDate.getMonth();
    var year = timeDate.getFullYear();

    var date = day + ' ' + allmonths[monthIndex] + ', ' + year;

    return(date);
}


/**
 * Function that will format the time
 * @param {*} timeDate 
 */
export const _getFormattedTime = (timeDate) => {

    //setting time in 12 hours format
    var hours = timeDate.getHours();
    var ampm = timeDate.getHours() >= 12 ? 'PM' : 'AM';
    var hours = timeDate.getHours() % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var minutes = timeDate.getMinutes();
    minutes = minutes < 10 ? '0'+minutes : minutes;

    var time = hours + ':' + minutes + ' ' + ampm;

    return(time);
}
