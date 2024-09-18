function humanize_format(num){
    if(num===undefined)
        return ' ';
    const suffixes = ['th','st','nd', 'rd'];
    const remainder = num%100;
    let suffix= suffixes[0];
    if(remainder>=11||remainder<=13){
        suffix=suffixes[0];
    }
    else{
        suffix=suffixes[remainder%10]||suffixes[0];
    }
    return num+suffix;
}
console.log(humanize_format());
console.log(humanize_format(1));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));


