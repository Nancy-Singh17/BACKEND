function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
module.exports=add;
/*now this will only work when we have one function but when we have multiple function then it will only consider the last function of the file ie overwrite now one can say we can write
this(module.exports=add;) again and instead of add give the other function name but still it will overwrite so we make object*/

module.exports={
   addfun/*(this is not mandatory)*/: add,
   sub
};

//we can also export like this

exports.mult=(a,b) => a*b;
exports.div=(a,b) => a/b;
