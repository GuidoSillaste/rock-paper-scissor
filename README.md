# Medical plants

This website was created to introduce diffrent medical plants that would otherwise be forgoten or missunderstood. It provides a basic intoduction of herbs and a herbalist that describes some of the beneficial effects of medical plants. I divided the medical plants to 3 different categories where each one gets either harder to find or is suppresesd by bigpharma.

This is the first of five Milestone Projects that the developer must complete during their Full Stack Web Development Program at The Code Institute.

![Responsiveness](assets/markupimage/Responsive.png)

## Demo

A live demo of the site can be found  [here](https://guidosillaste.github.io/rock-paper-scissor/)

## Table of contents


  - [User Stories](#User-Stories)
  - [Design](#Design)
  - [Features](#Features)
- [Technologies Used](#Technologies-Used)
  - [Languages](#Languages)
  - [Programs](#Programs)
- [Testing](#Testing)
- [Deployment](#Deployment)
- [Credits](#Credits)
  - [Content](#Content)
  - [Media](#Media)
  - [Code](#code)

## User Stories

### External user’s goal:

    The site’s users want to play an online game that has elements of chance.

### Site owner's goal:

    The site’s goal is to provide a challenging game with increasing levels of difficulty to entertain online users.
    To learn javascript.

### Potential features to include:

    Pattern matching functionality
    A limited number of tries before the game is over
    A score tracking system
    The ability to play against the computer

### Design

#### Colour Scheme

The main colours used throughout the website are a mixture of blue and lightbrown, with Red for footer hover.

#### Typography

The pairing of the fonts [Roboto](https://fonts.google.com/specimen/Roboto "Link to Roboto Google Font") and [Lato](https://fonts.google.com/specimen/Lato "Link to Lato Google Font") is used throughout the website with Sans Serif as the fallback font in case of import failure.

For features that needed to be highlighted, such as the featured single on the Homepage, the font [Montserrat](https://fonts.google.com/specimen/Montserrat "Link to Montserrat Google Font") was used, with Sans Serif as the fallback. This was in order to create a consistency with the digital artwork of the single's release.

#### Imagery

For images were specially chosen to fit plants used

The imagery  visually represents the purpose of the website.

All imagery provides alternative text to be used in the event that the element cannot be rendered.

### Features

The features of the site are very basic. Navigation bar stays at the top allowing to access all parts of the site. Footer stays at the bottom of the page giving people the option to navigate to all parts of the site. Landing page is simple whit a opening hero image followed by a herbalist intro and 3 sample plants. medical plants page is again starts whit a hero and is followed by 3x4 boxes of plants based on there difficulty to get. ON about page i make a simple intro to why the page would be benefit you.On contact page i give you a chance to fill in a form if you want to add a plant and why and contact table.

- Navigation Bar
- navigation bar stays at the top of the screen.On smaller screens the icon moves from navbar to the top of navbar.
![Navigation Bar]

- Footer
- The footer has 4 fontawesome icons for facebook, instagram, youtube and twitter and are connect to respective homepages.Footer stays at the bottom of the screen even if no content.
![Footer]

- Landing page
- Landing page has a starting medical plant that is well known but not used for its medical benefits.Background color isset to lightclay.It has one video file that slows the page down a bit and gives 3 more intros to well known plants.
![homepage]

- Medical page
- On this page i added 12 more plants,each whit lowerd accessibility caoused by restriction put on em.
![medicalpage]

- About page
- Here i simply added reasons to why the site was made.
![aboutpage]

- Contact page
![formpage]

#### Features left to implement

On this site many updates are still to follow making it bigger and whit more options. Which includes a search option whit the help of javascript. A lot of medical plants are still unknown.

### Technologies Used

#### Languages

- HTML
- CSS
- Pen and Paper

#### Programs

- little wireframes.
- Pen and Paper wireframes.
- Virtual code studio for code
- Git to store the code changes.
- Github used to store the repository.
- Google fonts was used for all text on the site.
- Fontawesome used for icons.

### Testing

Basic user testing works.

During testing box images did nothold size properly, text overflowed and buttons did not stay in place.This was fixed by making 3 divs inside the box for image,text and button.

Footer did not stay at the bottom of the page when no content. Was fixed by making the body a grid and giving it min height and space fill for main div.

Some of the new tabs did not work at first was fixed by adding _blank.

The live site has been tested on Firefox. The site has also been tested on several devices using dev tools to confirm that its responsive on all devices.



## Validator Testing

- HTML no errors were returned when passing through the official [W3C validator]
- CSS no errors were returned when passing through the official [Jigsaw validator]

## Lighthouse Testing

I ran several tests in Lighthouse and noticed that the performance was low, the reason for this was that the image sizes were too large. I resized the images and readded them and got the score I wanted. The score for Desktop was higher than for Mobile but I am satisfied with the results.

![Light house]
### Deployment

This site was deployed using GitHub Pages with the following the steps below:

1. Login or Sign Up to [GitHub](https://github.com/login "Link to GitHub login page")
2. Create a new repository named "medical-plant-site".
3. Once created, click on "Settings" on the navigation bar under the repository title.
4. Click on "Pages", on the left hand side below Secrets.
5. Under "Source" choose branch you wish to deploy in most cases it will be "main".
6. Choose which folder to deploy from, generally from "/root".
7. Click "Save", then wait for it to be deployed.
8. The URL will be displayed above the "source" section in GitHub Pages.

### Credits

#### Content

- The fonts were taken from [Google fonts](https://fonts.google.com/).
- The icons in the footer were taken from [Fontawesome](https://fontawesome.com/).
- Help with coding was taken from [https://www.w3schools.com/]

#### Media

- The image from the landing page was taken from [bing](https://www.bing.com)

#### Code

I looked in multiple sites in order to better understand the code i was trying to implement.

The following sites were used on a more regular basis:

- [Stack Overflow](https://stackoverflow.com/ "Link to Stack Overflow page")
- [W3Schools](https://www.w3schools.com/ "Link to W3Schools page")

## Acknowledgement

Self learned