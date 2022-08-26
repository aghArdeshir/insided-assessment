# Insided Assessment
This repository shows the commit history if its own!

# To see the result
You can:

- open https://aghardeshir.github.io/insided-assessment/
- or do `npm i ; npm start`
- or do `npm i ; npm run build ; cd build ; npx serve`

# NOTES

- I chose `create-react-app` as I'm familiar with it and it is easy-to-setup and
  always have been my go-to for rapid prototyping of React apps
- I installed `octokit` instead of `@octokit/core` which was recommended in
  the assessment exactly for no reason!
- I did not use prettier (or any other formatter) as I was the only developer on
  his project and project is a short-term development project as well
- I chose to use styled-components as I'm familiar with it and I like the
  approach
- I chose not to use any UI/CSS library as I believe pure CSS is a good choice
  for such a minimal project (I just ignored browser-compatibility issues that
  might rise due to this choice)
- I used `display: grid` and `dialog` HTML element and just ignored any
  compatibility issues as this is not a real-world production app. If there is
  any problem with your browser and you need it, just open an issue and I'll
  take care of it
- I did not do full-blown error handling, but just a little for demonstration
  purposes. Try adding an invalid access token key or disconnect from the
  internet
- I used inline styles here and there exactly for no reason!
- I did not use routing as the application did not need it. I just used a
  state-machine-like thing (a bunch of if and else ifs to be honest)
- I relied on browser date just for simplicity
- Every test present in the project is written with TDD approach

# If it was a real-world actual product or I had more time:

- I would definitely set up prettier and eslint with customized rules so
  conflicts won't appear because of non-logical/non-business reasons
- We would calculate dates on the server instead of relying on the client-side,
  or at least pass server date to the client
- We would have pagination instead of loading all commits at once
- We could provide a way to let the user be able to change the repository to
  show commits
- We would set up more beautiful error handling pages (use the internet for
  inspiration or employ a UI/UX designer)
- Would make the `getHumanReadableDate` much much more performant and more
  logical (like distinguishing between 1 minute and 2 minute**s**)
- We would have optimized icons and animations
- I would have cleaned up the `useCommits` hook a little more
- setup CI/CD to run tests or do some other cool stuff/checks
