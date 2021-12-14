# CST3145-coursework1

Web App with Vue.js

Task For this coursework, you need to create the front-end of a fictitious web app that allows students and their parents to look for after school classes and activities.

Requirements
• The coursework does not require any backend storage such as a (MongoDB) database. It is optional to store data locally using local storage.
• You can use external CSS library such as Bootstrap. Make sure the library file or online link is included in the submission.
• AnyJavaScriptlibraryisnotallowedifitduplicatesorreplacesfeaturesprovidedVue.js. Check with the tutor if not sure.
A submission will receive zero mark if it fails any of the requirements below:
• It must be implemented using vue.js framework;
• The code must be stored in a GitHub repository with at least 10 commits;
• The app must be available online using GitHubPages;
• The web app must be demonstrated.
• The work cannot be explained satisfactorily during the in-lab demonstration, i.e., stu-
dent cannot explain what the code does.


Criteria
• Display lessons (5%)
– –
–
–
• Sort –
–
There should be at least 10 lessons and each lesson has 5 spaces; Each lesson should have at least:
∗ Subject;
∗ Location;
∗ Price;
∗ Space (how many spaces are left); ∗ A image or icon.
The list of lessons must be stored as an array of JSON objects, one object for each lesson, in a separate JavaScript file, such as lessons.js;
v-for has to be used for the display of the lesson list.
(5%)
User can choose to sort the lessons by one of the following attributes: subject, location, price, or availability;
There must be an option to sort in ascending or descending order, regardless of the attribute selected;
• Add to cart (5%)
– Each lesson must have a ’Add to Cart’ button;
– The button is only visible when there is still space available;
– Clicking the button once will add one space to the shopping cart, reducing the
remaining space by one; • Shopping cart (5%)
– The shopping cart button should only be visible after at least one lesson is added to cart;
– Clicking the shopping cart button should go to a new page, with a button to go back to the lesson page;
– The shopping cart should show all the lessons added;
– User should be able to remove lesson from shopping cart. • Checkout (5%)
– The checkout is part of the shopping cart page;
– A user must provide the following information before he/she can check out:
∗ Name;
∗ Phone;
– The ’Name’ must be letters only and the ’Phone’ must be numbers only;
– The ’checkout’ button is only visible after both valid ’name’ and ’phone’ are pro-
vided;
– Clicking the ’checkout’ button should display a message confirming the order has
  been submitted.
  
  Screenshots of the Coursework.
  
  Screenshot 2021-12-14 at 18.53.10<img width="1440" alt="Screenshot 2021-12-14 at 18 53 10" src="https://user-images.githubusercontent.com/73651340/146061672-f5ed6c46-9325-460f-9d13-1459d8edb27f.png">

Screenshot 2021-12-14 at 18.57.53<img width="1440" alt="Screenshot 2021-12-14 at 18 57 53" src="https://user-images.githubusercontent.com/73651340/146062101-f48ba89c-318c-4c99-8d0e-879d98cf0923.png">

Screenshot 2021-12-14 at 18.53.24<img width="1440" alt="Screenshot 2021-12-14 at 18 53 24" src="https://user-images.githubusercontent.com/73651340/146061792-e71c2c55-37af-481a-ad97-1b40864582e5.png">

Screenshot 2021-12-14 at 18.53.56<img width="1440" alt="Screenshot 2021-12-14 at 18 53 56" src="https://user-images.githubusercontent.com/73651340/146061846-3c905af6-104a-4a00-ba96-bc629f50d40f.png">
