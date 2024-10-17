# Open House Calendar Application

## PLEASE READ ALL THE INSTRUCTIONS CAREFULLY

## Instructions

You've joined the Open House team, which is focused on helping prospective buyers tour houses they are interested in purchasing. The team has inherited this Web application, which was built as a proof-of-concept and has never been released to users. You need to get it ready for production by making sure it uses real data from our backend, is bug free, has styles that match the company brand, and by adding a new feature.

### Requirements for production release

1. We need to add a landing page for users to see all the listings they have favorited. When a user visits our application, they should first see this landing page. From the landing page, users will click on a listing to see the calendar view of available open house days for that listing.
2. We also need to wire the application up to real data (right now it's using mock data).

   - The data for all user favorites can be found at this URL `/api/saved-listings`
   - The data for a specific listing's open house dates is here `/api/saved-listings/<listing ID>`

3. We need to update the styles of the application to generally match the look and feel of www.compass.com. We do _not_ need to make this perfect, but please help get things looking closer than what we currently have.
4. We should add error handling in the application because our API sometimes returns errors.
5. We need to test the application for launch and make sure it's bug free.

### Things to note for the take home

- For a successful assessment, you do not need to do anything more than meet the listed requirements. Where a requirement is ambiguous, please choose any working solution to it and be prepared to tell us why you chose that solution.
- Please do not add any new packages, scripts, or other external dependencies to this project.
- We've built a tiny mock data server in `api-plugin`. On occasion, this server will respond with errors. Please don't try to fix the server. Instead, update the application to handle the errors.
- Please provide your solution as an email attachment (but please don't include the `node_modules` folder). You can use the included `zip-it.sh` script to compress the files into a tar.gz archive.
