const days = (date_1, date_2)=>{
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays= Math.ceil(difference / (1000*3600*24));
    return TotalDays-1;
}