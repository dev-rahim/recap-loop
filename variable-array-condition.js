var bottolColor = "yellow";
var waterQuentaty = 1;
var isFull = true;

// Array
var items = [ "rahim", "karim", "rakesh" ]

console.log( items );
console.log( items[ 1 ] );
console.log( items.indexOf( "karim" ) );
items.push( 'rikta' )
console.log( items );
items.pop();
console.log( items );
items.shift();
console.log( items );
items.unshift( "bilbul" )
console.log( items );



// conditions

if ( items.length >= 3 ) {
    console.log( "too many stuf" );
}

else if ( items.length == 3 ) {
    console.log( "you only  have  4 items" );
} else {
    console.log( "wow you have a clean desk" );
}