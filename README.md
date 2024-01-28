# SocialNetworkAPI

## Description
A server side API back end environment that allows the user to view, add, modify and delete data in accordance with an established MongoDB Connection. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Overview](#overview)
- [Presentation](#presentation)
- [Links](#links)
- [Contact](#contact)

## Installation
In order for this application to function as intended, the local environment will require a connection to Express server and will expect that the user connects to a MongoDB database. The connection to the server at a local level can be initiated on a VS Code terminal or a general machine terminal command line. Once the port has been confirmed via the terminal the environment will be visible in Insomnia.

## Usage
### User Story
```md
AS A social media startup
I WANT a fully functioning backend API environment 
SO THAT I can successfully view all records, add new records, update existing records and delete existing records
```
## License
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Overview
- The process is initialized in the terminal where the server is connected via 'npm start dev.'
- Insomnia can be opened at this point as the endpoints will be accessed here
- The categories of data that can be addressed include Users, Thoughts and Reactions.

In order to complete the steps below, the actions require the user to follow the endpoints specific to each request via the code. This data is housed  The structure for the endpoints will start with ./api/users or ./api/thoughts.

- Functionality for each category is listed below: 
  - Users:
    -   GET all users
    -   GET an indvidual user
    -   POST a new user
    -   PUT an existing user
    -   DELETE an existing user
  - Thoughts:
    -   GET all thouhghts
    -   GET an indvidual thought
    -   POST a new thought
    -   PUT an existing thought
    -   DELETE an existing thought
   - Reactions:       
    -   GET an indvidual reaction
    -   POST a new reaction
    -   PUT an existing reaction
    -   DELETE an existing reaction

Below are some screenshots illustrating the process of connecting to the server and completing necessary requests.

Connecting to the server:

<img width="799" alt="Screen Shot 2024-01-28 at 1 06 23 AM" src="https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/22cccfdf-d243-4d38-90ac-840687657e9e">
<img width="799" alt="Screen Shot 2024-01-28 at 1 08 11 AM" src="https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/8c4bc5bf-34a1-45de-9116-d8d9b3eccddc">

Performing Various Requests:

<img width="1023" alt="Screen Shot 2024-01-28 at 1 15 18 AM" src="https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/75e98ae0-ea4f-43ca-8228-eb0f3c82596a">
<img width="1023" alt="Screen Shot 2024-01-28 at 1 13 46 AM" src="https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/49704d39-623d-4146-8f50-d827e1700655">
<img width="1023" alt="Screen Shot 2024-01-28 at 1 12 41 AM" src="https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/f39edfda-2b75-415b-aa2f-7d7e928af0b8">
<img width="1023" alt="Screen Shot 2024-01-28 at 1 10 03 AM" src="https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/60a31bc5-0a51-47a5-b54a-d283e0795156">

      
## Presentation
The following is a link to a visual presentation of the process as described above:
https://github.com/rickdeakins/SocialNetworkAPI/assets/141289243/52cf8bb9-8d44-4775-9040-391a499bf3ae


## Links
Repo: [textEditorPWA](https://github.com/rickdeakins/textEditorPWA)

## Contact
GitHub: [rickdeakins](https://github.com/rickdeakins)
Email: [rickdeakinsjr@gmail.com](mailto:rickdeakinsjr@gmail.com)
