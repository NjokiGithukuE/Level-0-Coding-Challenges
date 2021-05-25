function time(number) {
    var hours = Math.floor(number / 60);
    var minutes = (number % 60);
    if (hours === 1 && minutes === 1) {
        console.log(hours + "hour " + minutes + "minute")
    }else{
        console.log(hours + " hours " + minutes + " minutes")
    }
    //
    console.log(hours);
    console.log(minutes);
}
time(133);