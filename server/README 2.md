# biglight

To run this project 
1. Clone the repository into you local machine
2. Extract the folder and open it up in your favourite editor.
3. Chanage direcotry to the server folder and run npm install in the command line to install all the depencies
4. Change to the client direcotry and run 'npm install ' on the command line to install all the depencies for the client folder.
5. On the sever folder run 'npm run dev' to start the sever and the page will load in your browser on port 3000.

Project Structure
The project consist of two main folders. The server side and the client side.
The server side serves all all the spreadsheets, creating APIs, which is then consumed in the client side.
On the client side, there is an index file, which starts the app and loads all the other components.
There is a component folder which has all the other components and the pages for the project.
The sass file contains all the css files (scss) for the project.

The sever is written in node.js and express.

The Approach.
I created a server using noed.js and Express. This made it posible to access the spreedsheet which is where the data for this
project is located. I used a package called read-excel-file/node to load this, and when loaded, a sheet number is passed to a function to
differentiate between the three sheets. An API is then created for easch page based on their spreeadsheet.
The client side then consumes this API on each page to get access to the data and use them to display the content on the page.

Performance Techniques
Reducing the size of the Script file.
Finding and Fixing Memory leaks in a page
Optimised CSS.
Server side rendering.
Number of HTTP Roundtrips
Code Alternatives with better performance.
Micro Optimisation in your code.


Gatsby
Gatsby is a framework for building websites and apps. It has in built security, very performant and also very scalable. You can use gatsby to build anything you want to build becuase it has a lot of plugins in it that you can use. Gatsby is React based and its powered by GraphQL.

You can create websites that uses static files that has an incredibly fast page loads using its powerful preconfiguration. You can achieve an intelligent image loading, asset optimization, data prefetching, code splitting and server-side rendering with gatsby.
It is also easy to use and very fast to get a project completed. You can build sites with services you want , like shopify, Stripe and wordPress. You can also integrate data from anywhere with gatsby, like APIs, databases, CMSs, static files or even multiple sources at once. 

PRPL
is an acronym that describes a pattern used to make web pages load and become interactive, faster.
it is a pattern for structuring and serving Progressive Web Apps (PWAs), with an emphasis on the performance of app delivery and launch. It stands for: Push critical resources for the initial URL route. Render initial route. Pre-cache remaining routes (using service workers).

