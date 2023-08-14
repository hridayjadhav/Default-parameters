// ES 5

// type 1
function multiply (a,b){
    console.log(a*b);
}
multiply(4);



// type 2
function multiply (c,d){
    d = (typeof d !== 'undefined') ? d : 1                         

    // if the value of 'd' is not equal to undefined then the value of 'd' will be 1.

    console.log(c*d);

}
multiply(4);




// ES 6

// type 1
function multi(a,b=5) {           //here we can use default parameter via give the value of b directly
    console.log(a*b);
}
multi(3);


// type 2
let mult = (a,b=4) => {    //arrow function and used dafault parameters.
    console.log(a*b);
}
mult(8);