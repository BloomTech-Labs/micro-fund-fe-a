# MicroFund Labs 30 

The Labs 30 engineering team was the second team to inherit the MicroFund Java Spring Application. Our team consists of 5 Engineers; Melissa Cela, Sam Lalli, Miah Davis, Danny Hoesle, and Karmen Durbin. 

## Main Updates To Features

Key updated features: Improved the overall user experience of the application. Overhaul of UX/UI design features. ThemeProvider implementation for individually styled components. Creation of signup page for User Interface. Generation of user flow and new user stories.   

### Technologies Used

React Query, ThemeProvider, Java Spring. 

| Melissa     | Sam          | 
| ----------- | -----------  |
| FE Engineer | FE Engineer  |
| UX/UI       | UX/UI        |

| Miah        | Danny        | 
| ----------- | -----------  |
| FE Engineer | FE Engineer  |
| UX/UI       | UX/UI        |

| Karmen      | Jasim        | 
| ----------- | -----------  |
|Technical Docs| Team Project Lead  |
| UX/UI       | TPL        |



## Configuration Instructions
You will need to install any dependencies you need when you start up the app. Be sure you have a .env file with the correct environment variables. These should connect to OKTA. 


## Operation and Installation Instructions

This application is running React and React Query for the frontend of the application. You will need to have your environment set up to run the dependencies you see in the package.json file.  


## Known Bugs

Problems with user roles: Unable to differentiate or create user roles, blocks ability for user flow and user interaction. Can not sign in as a microentrepreneur which makes you unable to apply to the program, which makes it impossible for a main admin to accept or reject application. Same for partner admins. An unknown issue with OKTA authentication process. Environment issues where some users may not be able to log into the backend of the application.


## Environment Setup

This app runs verification through OKTA, you will need to set up with the proper environment variables. This application runs properly on WebStorm and VSCode. 

## Deployment

To deploy this application you will need authenticated tokens from OKTA, login and a password that connects to Heroku. Please see OKTA docs for more info. [OKTA Docs] (https://docs.labs.lambdaschool.com/guides/okta/okta-basics)


## Troubleshooting 

When troubleshooting this application refer to OKTA docs first. All authentications and access goes through OKTA and the multi-user roles are buggy. 

## Built With

* [React Query](https://react-query.tanstack.com/overview) - The web framework use
* [Java Spring Boot](https://spring.io/guides) - Restful API development
* [Maven](https://maven.apache.org/) - Dependency Management


## Contributing

Previous contributions made by Labs 29 can be found here (https://github.com/Lambda-School-Labs/micro-fund-be-b).

## Version 

MicroFund Version 2.0 Labs 30 team. 


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Project TPL 
* Jasim Rashid

