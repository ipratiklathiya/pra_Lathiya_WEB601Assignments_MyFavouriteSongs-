
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

Created a pipe named it to contentFilter.pipe.ts and  that accepts a single optional string
parameter, to filter an array of Content and only returning Content that has its type equal to a
string passed to the pipe. and added the condition for If no value is passed in, then the pipe returns a filtered array of
Content that has no type set.

commit to github

edited the html page of Content-List component so it displays seperate listes by type using my contentFilter pipe
i added the one loop into the pipe and added 2 seperate *ngFor loops with the type set

added Style for the lists Content-Card's differently by using different font or background colours for
the card tag itself, based on their type. and because of this There is
a clear difference between the colour styling from one card with a certain type versus one with
another type.

commit to github.

added the ability On my Content-List component55 input field at the very top of the page that users
may enter the title of a Content item. Next to the input field, added a button that, when clicked,
it will display a message about whether a Content item exists with that title or not. The
message should be displayed under this search, with red text when the title doesn't exist, and
green text when it does exist.

commit to github 

added the if else statement for If a user enters the title of a content item that exists, in addition to the
message appearing on the page, highlight that content item on my page with a border or
background colour change on that content card itself.

****************
****************
assignment-4 
****************
****************

changed the version of my package.json file to 0.04

added  directory of image in assets and added image related my theme 

removed one imgurl from  my array In my Content-Card.and added  if the imgURL is not set, displayed an image relevant to my theme (my favourite songs), using either *ngIf. In My
Content-List component, add or edit some elements to my array of Content.

Created an attribute directive called hover-affect. Apply this attribute directive in my Content-Card, and use it to add an underline to the type when a user
hovers over the type, and remove the underline when they hover away from the type.

commit to git

Using the same directive i added to  bold the individual tags when a user hovers over one, and
removes the bold when they hover away.

and also added conditions for its operates on each individual tag and not just on all the tags at the same time

In that same attribute directive, applied it to the Content-Card's and
changed the border of the Content-Card's tag when i hover over it, and set the border
back to what it originally was (before the hover) when i hover away, if the content
card is the first or last card in the *ngFor loop.

**************
ASSIGNMENT 5
**************
Changed the version in my package.json to 0.0.5

Added a component into my  application called CreateContent and add this component to
the top of my ContentList.

n this new component, added an input field for all the necessary fields to make a piece of
content, including the ID, followed by a button. also added, When the button is clicked, send the new
content item up from the CreateContent component to the ContentList using the
promise pattern. When the new piece of content is successfully sent from the
CreateContent component using that pattern, the resolved promise should invoke a
success function that will add a message to the console saying the addition is successful,
along with the title of the content, and the input fields in the CreateContent's html file
should be cleared of their current values. and also added , When the ContentList receives the new content
item, display the new item on the ContentList using my preexisting *ngFor's that still
have the pipes operating on them.

added condition,If the content fails to be added  the resulting rejected promise should display an error message, in bolded
red text, under the submit button stating that the content failed to be added. When the content
is successfully submitted after a failed attempt, the error message should also be cleared.

: Using  this promise seted  to also do error checking for required fields
(based on the required properties of my Content interface). If a required field is not
submitted, reject the promise, do not try to emit the content, and display the an error
message, in red, saying the user must try to create the content again with the required fields
filled in.

*************
Assignment 7
************

change the version of my package.json file to 0.07

Converted my application to use the simulated server discussed in class instead of the
contentDb.ts file system for storing and retrieving the content.

Modified my content interface to accept null id values.

Created a new component called ModifyContentComponent. Added the
ModifyContentComponent to the top of my ContentList.

In the html of the ModifyContentComponent, added in the necessary inputs for each field of
my Content, EXCLUDING the id, and added a button below the inputs, with text on the button
indicating it is for adding content to the list. When a user clicks the button, add a new 'Content'
item to the simulated server database using the http service inside of my content service
and clear all the input fields.

alos i Ensure that the id number for the content is automatically being set by the simulated server,
not manually by the front end code. 

Using the message service  for display a message after content is
successfully added to the ContentList.also, Make sure that the new item is displayed on the
page, even with the pipes applied.


************
************
************
Assignment-8
************
************
************

Changed the version of package.json to 0.0.8

Added a custom angular material theme into  assignment using a colour of blue and grey.

Changed all of the inputs and buttons across my angular application to use their material
counterparts.
Added a new button called "Add New Content" to my ModifyContentComponent from the
previous assignment. Clicking it should open an angular material dialog. The dialog should
contain the following in it:

Seted the dialog title to "Add contentType" where contentType is the theme of my
content 

Moved my inputs for creating a new content item into the dialog content

Added an input field for the id field of content as well, and set it to be disabled
The dialog actions should have two buttons which is below:

One button to cancel the dialog, which will close the dialog when clicked

One button to add the content, that when clicked, will close the dialog and send
the data from the input boxes up to the ModifyContentComponent.

The ModifyContentComponent should add the content to the simulated
server just as it did for assignment 6 after the dialog closes.
If the user opens the dialog again using the "Add New Content" button, all the input fields
should be empty.
Changed my ContentCard component to use the material card component to display and
organize the information in the ContentCard component.

Added  two additional material components that we have not used in class.
 
Added the ModifyContentComponent to my ContentCard
component such that the "Add New Content" button instead says "Update Content". When the
user clicks on the button, the dialog should appear, with all the input fields populated with the
content information for that ContentCard. The second button in the dialog itself should now
say "Update Content" (where it was previously for adding content), and when that is clicked, it
will close the dialog and send the updated version of the information from the input boxes up
to the ModifyContentComponent, which will update the existing Content on the
simulated server using the appropriate http method in my content Service. Once the content
is updated successfully on the simulated server, use the message service to displayed a
message that the content was successfully updated, along with the title of the content.

**************
**************
Assignment-9
**************
**************

Changed the version in package.json to 0.0.9.

Created a new component called ContentDetailComponent that displays a more detailed view of specific content item 
based on the content's id in the URL.

Added routing to the application such that users can visit the content list and individual content detail pages without
the page having to reload going back and forth between the two.

Removed the single content card from the AppComponent and removed the content description from the content card.

The AppMessage component is still displayed on the AppComponent.

Users can view the list if they visit the root URL of the application or if they go to '/list'.

Added the link to the content detail page in the content card.

The content detail page retrieves the content from the simulated server using the content service and displays the 
individual piece of content in a different way than the content card. When the content comes back from the simulated 
server, the ContentDetailComponent adds a message using the MessageService to display the id and title of the content
that was retrieved. Added a link to the ContentDetailComponent that leads back to the content list.

Added a route in the application that handles any invalid URLs and displays some kind of 'Page not found' message 
to the user, with a link or button to the content list on the page as well.

All links in the application use the routing rules and do not reload the page when clicked.

Implemented lazy loading for the ContentDetailComponent. The console indicates the component's chunk is loaded after a content detail link is visited.



