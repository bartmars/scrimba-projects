# Tindog
Scrimba Soloproject from the Frontend Developer Career Path, built from scratch.

## Deployment
This repository is being auto-deployed via Netlify.

## Design
[Figma Design](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?type=design&node-id=0-1&mode=design&t=h81pHtLBvfUSC3os-0)

## Requirements
* [x] Two screens (start & questions)
* [x] Pull 5 questions from the OTDB API
* [x] Tally correct answers after "Check answers" is clicked
* Style & polished

## Hints

* Use a library to decode the HTML Entities (he or html-entities)
* Create new array with all answers. Randomly insert the correct_answer into the array with the incorrect_answers. Use Google/ChatGPT for help on how to shuffle items in an array at random or how to insert an item randomly into an array.
* Limit answer choice to 1 and style selected answer: either (1) track the selected answer index inside each question object, OR (2) use an HTML form w/ radio inputs using the same "name" attribute to automatically only allow one selection (and check Google on how to style a radio input to look like a button).


