This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Popsa.com - React Frontend test skeleton

## Getting Started

Run the poject:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

Having dedicated 5h this complete this assignment, I haven't gotten as far as I would've liked in terms of the styles when dragging and dropping an image.

I've first conducted research on different library options to achieve the desired functionality. I came across react-beautiful-dnd being one of the preferred options in the community to then find out that it'll be archived by April 2025 so I didn't think it'd be smart implementing it as I'm approaching the test as if I were in the actual job.

Decided to use dnd-kit as it was well documented, flexible, well maintained and the abstractions were "easy" to understand.Spent most of my coding time getting the functionality right, making sure images wouldn't swap places until the drop action happens, being able to drag-drop images in different containers etc.

Styling-wise it's obvious it could do with more time dedicated to it, but the project had some structural issues and console warnings that I wanted to address since, again, I approached this challenge from the perspective of being in an actual job and I thought the value added by having a cleaner and more straightforward folder structure and SOC would be advantageos for everyone in the team.

I've addressed issues like the following:

-   Using the next Image component instead of a normal HTML <img> element and extended the next.config file to be able to do so.
-   Stripping out styles from component files.
-   Reorganising the pages folder and setting a redirect to the Home page when loading the app (instead of rendering the Home page in the pages/index.js file)

## What would I do next?

If I had the time I would've liked to somehow detect where the user is clicking on an image so that the minified droppable image circle is placed under the cursor instead of on a fixed position and then I would've liked to create a dropping effect where the image fills out its new position growing from a circle to full view as well as a hovering shadow when being on top of another image before dropping.

There's a warning I get on my Chrome console when not on incognito mode (Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received). Did some research on it and tried different fixes but wasn't able to come up with a solution since it might be due Chrome extensions I have installed.

Overall I enjoyed the challenge, learnt new things (never used a D&D library before) and I hope I made the right decision also addressing other issues on the project like the ones mentioned above, since it's the kind of work I could be addinng more value on.
