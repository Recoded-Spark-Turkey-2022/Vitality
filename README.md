# Capstone Project (Online Therapist)

Our project link is https://vitality-online-therapist.netlify.app/



![CA16170E-6798-4B47-AD30-BFC7E9484CCF](https://user-images.githubusercontent.com/83344740/220455646-714bf0af-9692-4290-8712-48136c7f4a60.jpeg)


![Capstone Phases Weekly](https://user-images.githubusercontent.com/83344740/220457368-5470935d-f60f-4271-9c39-cf41bf2f58b2.jpg)



Figma link : https://www.figma.com/file/ae4wheNUlDfAcNOmxj13Xy/Online-Therapist?node-id=0%3A1&t=erdHN4EExd0iKkG9-0



Brief Link : https://docs.google.com/document/d/1Und4QiW51T7f5kW_OpHho_WBV1wGlaiiODos_cO5Wuo/edit


# Capstone Guide
This is your chance to apply everything you have learned in the Bootcamp in a team project!

Why do we do this?
We believe the best way to learn is by doing, so the next six-seven weeks will be about applying everything you’ve learned into a final Capstone project.

This ultimately benefits you—if you don’t have any related work experience on your resume, you might be a tough sell to an employer, but working on projects allows you to show you have the skills required for web development work.

You will then have an opportunity to showcase your Capstone project and your technical and durable skills to future employers!

 

What will you be doing?
Building a website with 4-5 of your peers!

<img width="1061" alt="Ekran Resmi 2023-02-22 00 09 23" src="https://user-images.githubusercontent.com/83344740/220459047-c9b0f5fc-af7b-4c38-8d38-56d50ca84ac2.png">

You'll be building this project with your peers. You'll be able to read more about the project you will build on your Canvas.

<img width="1038" alt="CAA52EDF-BC1E-4891-8F56-5E6B8EECE80F" src="https://user-images.githubusercontent.com/83344740/220460063-5ca97d19-1f38-4b12-b858-cd12a55e15ea.png"><img width="1037" alt="Ekran Resmi 2023-02-22 00 16 40" src="https://user-images.githubusercontent.com/83344740/220460420-9cd84bfe-a78a-4826-83e3-a26039aa912e.png">


<img width="921" alt="Ekran Resmi 2023-02-22 00 22 29" src="https://user-images.githubusercontent.com/83344740/220461425-86530f1b-6d53-4307-bfcc-f9f64da4d3e2.png"><img width="921" alt="Ekran Resmi 2023-02-22 00 24 13" src="https://user-images.githubusercontent.com/83344740/220461716-f20a3286-8f08-4b72-8c58-d57e05c8a125.png">

<img width="1071" alt="Ekran Resmi 2023-02-22 00 25 18" src="https://user-images.githubusercontent.com/83344740/220461913-e562fb7d-c841-4f3c-ab87-6a4bed711580.png">


<img width="1070" alt="Ekran Resmi 2023-02-22 00 26 13" src="https://user-images.githubusercontent.com/83344740/220462072-b17444be-f290-4b8b-ba67-5f8a7414eee4.png">

<img width="1063" alt="Ekran Resmi 2023-02-22 00 27 18" src="https://user-images.githubusercontent.com/83344740/220462292-53693061-ab33-466e-8a9b-e55aa285f76d.png">

<img width="1082" alt="Ekran Resmi 2023-02-22 00 29 59" src="https://user-images.githubusercontent.com/83344740/220462796-69074dee-da78-4453-8650-349a132034b5.png">


## Issues and Pull Requests
We will use GitHub to manage the project. Any issue (or task) will be created during your team's Sprint Planning. Then once assigned to you, you will have to implement the feature and create a PR.

The PR needs to have at least 2 reviewers from your peers. Once they review it within 24 hours, you can either merge it or, in case changes are requested, you will have to make the changes and then ask for another review.

> ⚠️ Never push to `main` branch. Always use a new issue and PR to merge your work.


## Commits
You should commit on each step and make sure your commits mention the issues it fixes.

Before committing, you need to run linter and prettier:

```bash
yarn lint
```

> 📌 In case this command shows you a warning, you need to go and fix these warnings.

```bash
yarn format
```

> 💡 This command will format your code using prettier. 

Each commit must have a prettier run before they are staged and committed.

## Pull Requests and Issues Templates

It would be best if you made sure to fill out all the details for the PR and Issue template. Once you create a PR, it will show you what data you need to fill in and some checkboxes to tick.

## Tests

Adding tests to your components maybe hard at the start, you can check [some resources](https://reactresources.com/topics/testing) on writing unit tests for React. And try to add some yourself.

Showing your employer that you care about writing tests, is a competitive advantage!

## Reverting Files
Sometimes, to test our components, we need to edit some files that are not relevant to the issue. 

For example, to test a component, we may need to change `App.js` to show only our component while building it.

You need to make sure that before you commit, you change `App.js` back to how it was before your change. The reviewer can then test your component however they like. 

> 💡 Always make sure that the Files Changed tab in the PR has only the relevant files for the issue.


---
## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
