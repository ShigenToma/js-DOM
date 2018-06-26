/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

name1.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
position2.innerHTML = 'Project Manager';

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/
var aliasElem = document.getElementById('alias3');
aliasElem.innerHTML = 'Concatenation';





/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/
var rowList = document.getElementsByClassName('profile');

rowList[0].innerHTML = 'Dig if you will the picture Of you and I engaged in a kiss The sweat of your body covers me Can you my darling Can you picture this?';



/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/
var rowList = document.getElementsByClassName('profile');

rowList[1].innerHTML = 'If you spend too much time thinking about a thing, youll never get it done';


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/
var rowList = document.getElementsByClassName('alias');

rowList[2].innerHTML = 'Afro Samurai';


/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/
var node = document.createElement("div");
    var textnode = document.createTextNode("Peter Griffin");
    node.id = 'name7';
    node.appendChild(textnode);
    document.getElementById("nameParent").appendChild(node);


 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/
var node = document.createElement("div");
    var textnode = document.createTextNode("Old Man Riverwalk");
    node.id = 'alias8';
    node.appendChild(textnode);
    document.getElementById("aliasParent").appendChild(node);


//Final Boss
/*9. Create your own profile.*/

var nameElem = document.getElementsByClassName('firstName');
nameElem[2].innerHTML = 'Shigen';
var ageElem = document.getElementsByClassName('otherAge');
ageElem[2].innerHTML = 44;
var statusElem = document.getElementsByClassName('status');
statusElem[2].innerHTML = 'Married';
var mottoElem = document.getElementsByClassName('motto');
 mottoElem[2].innerHTML = 'Y.O.L.O';