# GDSC-Recruitment-2023

<h1>INSTALLATION STEPS</h1>

- Install NodeJS (Refer: https://nodejs.org/en/download)
- Clone https://github.com/parikshith521/GDSC-Recruitment-2023.git or download the code as zip and extract it on your system
- Go to this folder, open the terminal and type 'npm install' (without the quotes), this will install all the dependencies
- Create your Github Access Token (Refer: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- Create a .env file where the .env.example file exists, copy the contents of .env.example file to the .env file and place your token as mentioned in the .env.example file
- In the terminal, type 'npm run start' (without the quotes).
- Now localhost:3000 should automatically open in your browswer and the website should be visible.


<h1>IMPLEMENTED FEATURES</h1>

- Displays general user details
- Displays the user's github stats
- Displays the user's contribution calendar
- Displays the user's recent repositories and recent commits for that repository
- Responsive design for mobiles, tablets etc.

<h1>ISSUES</h1>
- For the correct display of the tooltip, the background of the html page has to be kept transparent, therefore, only the components have a black background instead of the entire page. 

<h1>PLANNED FEATURES</h1>
- Implement our own tooltip instead of using an external compoenent library to solve the above mentioned issue. 
- For a particular searched username, we can suggest similar people to search for based on the followers and network of the originally searched person.

<h1>REFERENCES USED</h1>
- Github GraphQL API : https://youtu.be/6xO87LlijoQ
- Tailwind Docs : https://tailwindcss.com/docs/
- Tooltip Component: https://mui.com/material-ui/react-tooltip/

<h1>VIDEO</h1>
- https://youtu.be/sYcxstoHFhM
