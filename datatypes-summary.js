/* 1. primitive DataType(7 types)
 		a>string
 		b>number
		c>boolean
		d>null
		e>symbol
		f>BigInt
		


	2.Non-primitive dataType(Refrance Type)
			a>array
			b>object
			c>functions

	.
	

*/
// >>>>>>>>>>>>>>>>>>>>>details about memory>>>>>>>>>>>>
/*
		stack(primative type){
			>>gives a refrance
		}
		Heap(non-primitive Type){
			>> not gives a refrance
			>>it gives the original value of the as the refrance
		}

*/
/* 
example of : stack >> it gives the copy of the refrance value 
>> changes are done in copy refrance 

let adityaClasses = "helloAditya Dubey";
let AnotherClass = adityaClasses;
AnotherClass = "Adarsh Clases";
console.log(adityaClasses);
console.log(AnotherClass);

*/
// ...............................................................
// example of heap
// heap give value of orginal refrance
// changes are done in orginal value

let usearOne = {
  email: "aditya@gmail.com",
  passwd: "678237823",
};

let usearTwo = usearOne;
usearTwo.passwd = "6307176624";
usearTwo.email = "giri@gmail.com";

console.log(usearOne.email);
console.log(usearOne.passwd);
