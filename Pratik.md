
Hi there my name is Pratik Lathiya and im currently developing
angular web application on My Favourite songs.this is my readme
file.

19/01/2022 01:15PM

Added repository into github named Pra_Lathiya_WEB601Assignments_MyFavouriteMusic
Edited readme.md file to Pratik.md

19/01/2022 02:04PM

created new Angular Application Named pra_Lathiya_MyFavouriteMusic using this
Command : ng new pra_Lathiya_MyFavouriteMusicApp

commited all work in github

19/01/2022 02:08 PM

Generating a component using npm run-script generatecomponent

npm run-script generatepipe to generate a pipe

02:53 PM

npm run-script generatedirective to generate a directive

02:57 PM

Added folder inside of my app named helper-files
commit to all work to github and continued to work on my application

03:00PM

added new file into helper-files folder named content-interface.ts

Inside of this new file, i define an interface called Content with the following
parameters:

id as a number title as a string

description as a string

creator as a string

imgURL as an optional string

type as an optional string

tags as an optional array of strings

commited all work in github and continued work on application

3:15PM

Created another file inside of the helper-files folder called content-list.ts that

contains a class named ContentList, with the following attributes and methods:

A private array of type Content

A constructor that initially sets the array to be empty

A getter function that returns your Content array

An add function that adds 1 Content item to the end of the array

A function that returns the number of items in the array

A function that takes an input of an index of the array and returns a reader-friendly html
output of a Content item's properties at that index (title, description, creator, imgURL
and type).

20-01-2022 3:59 PM

having error to generate component so i change my directory from command cd pra_Lathiya_MyFavouriteMusic
and generate new component using this command: " ng generate component Content-card".
and commited to github.

20-01-2023 04:02PM
In my Content-card's components defintion, created an instance of my

ContentList and added  4 valid items(id,title,description and creator) to it using the ContentList's add

function in the Content- card's constructor and commit to git.

04:38PM

added app component into app.component.html file so it will display on home page.

commit all work in git.

04:51PM

added function for if an index outside of the array's range is entered, return an html
error message from the function instead.

commit to git

******************
******************
ASSIGNMENT-2
******************
******************


02/02/2023

12:10PM

Deleted the ContentList class implementation from the Content-card code, and
deleted the content-list.ts helper file.

12:11 PM

Created a new component called Content-list using this command:
"ng generate component content-list"

12:14 PM

In My Content-list component, i defined an array of 6 or more Content items's name
id,title,description,creator,image,type and tags.

12:21 PM

Using an ngFor directive in My Content-list's html file, display 5 Content-card's
by passing in the values from My Content array

02/02/2023

12:31 PM

added Content-card's should be display the Content passed into it as follows:

Each Content-card tag has a 1 pixel border applied to it

The title should be in a header tag
The image, description, creator, type and tags are visible inside of the box. Styles and

positioning of these elements are your choice, so long as they're in the card. (Hint:
remember that your tags is an array)

Clicking on the image displays the Content's id and title in the console
Add any necessary padding, and margins as you see fit

The first content card displayed should have a black solid border of 2 pixels around it.

12:32 PM

n My app-root component, removed my  Content-card from the html and instead added

My Content-list to the html, so that it can be displayed on the home page of My

application. and i  deleted all the extra html in the app-root

that was automatically added by the default angular application.


12:38 PM

Finally for the bonus point i added condition which is Do not display, or attempt to display, the type, image or tags on the

Content-card if their value is not set.

and commited to git 

***********
***********

Assignment 3

changed the version in my package.joson to 0.03

added new more content to my array so my content has 7 items and updated my content item 
with two different type values and  some with no type set.
