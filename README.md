- I chose `create-react-app` as I'm familiar with it it is easy-to-setup and
  always have been my go-to for rapid prototyping of React apps
- I usedinstalled `octokit` instead of `@octokit/core` which was recommended in
  the assessment exactly for no reason!
- I did not use prettier (or any other formatter) as I was the only developer on
  his project and project is a short-term develop project as well
- I chose to use styled-components as I'm familiar with it and I like the
  approach
- I chose not to use any UI/CSS library as I believe pure CSS is a good choice
  for such a minimal project (I just ignored browser-compatability issues that
  might rise due to this choice)
- I used `display: grid` and `dialog` HTML element and just ignored any
  compatibility issues as this is not a real-world production app. If there is
  any problem on your browser and you need it, just open an issue and I'll take
  care of it
- I did not do full-blown error handling, but just a little for demonstration
  purposes. Try adding invalid access token key
- I used inline styles here and there exactly for no reason!
- I did not use routing as the application did not need it. I just used a
  state-machine-like thing (bunch of if and else ifs to be honest)

TODO:

- Add refresh button
- Add countdown for auto-refresh
- Show human-readable dates (like 2 minutes ago)
- Handle loading state as well

