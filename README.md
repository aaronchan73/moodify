# Moodify

Ever wanted to let your emotion dictate the songs you listen to? Well, Moodify's got you! Based on five common emotions, Moodify brings up a list of recommended Spotify songs for you to listen away!

## Home Screen
<img src="https://github.com/aaronchan73/moodify/blob/main/client/mainPage.png" width=600 height=350>  

## Main Screen
<img src="https://github.com/aaronchan73/moodify/blob/main/client/songPage.png" width=600 height=350> 

## Inspiration

As music lovers, we always choose songs based on how we feel. If we're happy, we might go for something upbeat, like hip-hop. If we're sad, something slower like ballads are the way to go. We wanted to make a web app that lets users explore songs they might not listen to usually, based on their mood.

We believed that music can change the world for the better, but first, we should start by connecting our human emotion with music.

## What it does

Moodify allows users to input their current emotion, and then is recommended different songs based on how they're feeling!
Each emotion that you select (Happy, Sad, Angry, Bored, Excited) corresponds to a different music genre, which pops out a list of songs based on that genre. 

**Emotion to Genre:** <br />
Happy -> Pop <br />
Sad -> Soul <br />
Angry -> Rock <br />
Bored -> R & B <br />
Excited -> Dancepop

## How we built it

For our front-end, we used React and Tailwind CSS for a smooth coding experience when creating the web application. For our back-end, we used the Spotify API and Axios to retrieve recommended songs, which can be stored in Firebase's NoSQL database Firestore.

## Challenges we ran into

We initially wanted to implement Computer Vision using GCP's Cloud Vision API. However, we were only able to used it for a Node.js application rather than for our React project, so we ultimately scrapped the idea.

## Accomplishments that we're proud of
Coming into this hackathon, most of our team were all beginners! None of us were fluent with JavaScript, so as while coding this project, we also had to learn JavaScript on top of learning React. 
We're proud of being able to create a full-stack web application that is both fun and useful.

## What we learned
1. Learning to make sacrifices. With only 36 hours in the hackathon, we figured out that we couldn't simply implement every feature. We can't make as perfectly aligned to our original plan.
2. Learning to prioritize our well-being. We stayed up all night to work on the hackathon, but it simply wasn't worth it. For most of the hours into the night, we didn't make much progress. We learned that it's super important to also take breaks, and also get some rest - never work while feeling tired or sleepy!

## What's next for Moodify

Incorporate Computer Vision to sense the user's mood directly, which allows for recommendations on the spot.
