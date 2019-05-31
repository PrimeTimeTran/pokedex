# CoderSchool FTW -  Pokedex
A pokdex application built using NPM, ES6, React, and a few other dependencies. The application helps users learn more about the different types of pokemon available today.
This project was built as an assignment for [CoderSchool](https:/www.coderschool.vn). 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Created with love by: Loi Tran
  


## Try it out

Demo online at [this link.](https://modest-leavitt-5821bb.netlify.com/)

## Video Walkthrough

![Demo](./demo.gif)

## State

The following is an object which represents our application's `state`. Understanding how to work with this object is critical to how the application behaves.

```javascript
{
  "tweets": [
    {
      "body": "Practice on many types of different applications",
      "likes": [
        "PrimeTimeTran",
        "Phil"
      ],
      "retweets": [
        {
          "body": "Sounds like a good idea to me!",
          "likes": [],
          "createdAt": "2019-05-26T06:32:25.172Z",
          "userName": "Chung2klee"
        }
      ],
      "createdAt": "2019-05-26T05:13:17.363Z",
      "userName": "BoomBoomRay"
    },
    {
      "body": "Study hard to learn programming.",
      "likes": [
        "BoomBoomRay",
        "PrimeTimeTran",
        "Hieu"
      ],
      "retweets": [],
      "createdAt": "2019-05-26T05:13:11.748Z",
      "userName": "BoomBoomRay"
    }
  ],
  "currentUser": "BoomBoomRay"
}
```

## User Stories

The following **functionalities** are completed:

* [x] User can sign in.
* [x] User can sign out.
* [x] User can make a new tweet.
* [x] User is prompted to make a tweet using a custom prompt message which uses their name.
* [x] User is prompted on how many characters their tweet is.
* [x] User cannot make a tweet over 140 characters.
* [x] User will see black text is tweet is under 140 characters.
* [x] User will see a red text prompt if the tweet is 140 characters.
* [x] User can see list of tweets.
* [x] User can delete tweet if they are the one that made it.
* [x] User can see who tweet was made by.
* [x] User can see when a tweet was made.
* [x] User can like tweet.
* [x] User can unlike tweet.
* [x] User can respond to a tweet by 'retweeting' 
* [x] User can have tweet data saved(closing tab does not 'restart' application).
* [x] User can see total number of tweets.
* [x] User can see total number of likes.
* [x] User can see total number of retweets.

## Time Spent and Lessons Learned

Time spent: **4** hours spent in total.

I learned how to implement a 'react-like' structure for the application using JS. After a few refactors the code ended up a lot cleaner. I also learned how forms work in bootstrap better. If properly setup they can fire actions on enter press without an event listener.

## License

    Copyright [2019] [Loi Tran]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

```javascript
const applicationState = {
    types: [
        "poison",
        "grass",
        "fire",
        // ...
    ],
    pokemon: [{
        "_id": "557a723880a20c9db3bc31c2",
        "pkdx_id": 1,
        "national_id": 1,
        "name": "Bulbasaur",
        "__v": 3,
        "image_url": "http://pokeapi.co/media/img/1.png",
        "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "types": [
            "poison",
            "grass"
        ],
        "evolutions": [
            {
            "level": 16,
            "method": "level_up",
            "to": "Ivysaur",
            "_id": "557a723880a20c9db3bc31c3"
            }
        ]
        },
        {
            // ...
        }
    ],
    allPokemon: [{
        "_id": "557a723880a20c9db3bc31c2",
        "pkdx_id": 1,
        "national_id": 1,
        "name": "Bulbasaur",
        "__v": 3,
        "image_url": "http://pokeapi.co/media/img/1.png",
        "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "types": [
            "poison",
            "grass"
        ],
        "evolutions": [
            {
            "level": 16,
            "method": "level_up",
            "to": "Ivysaur",
            "_id": "557a723880a20c9db3bc31c3"
            }
        ]
        },
        {
            // ...
        }
    ]
}
```