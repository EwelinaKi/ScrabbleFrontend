# Litterki (scrabble game) frontend

This project was made by:

   - [Weronika Dębowska](https://github.com/WeronikaDebowska) - backend

and

   - [Ewelina Kijanowska](https://github.com/EwelinaKi)  - frontend

It is a simple one person scrabble game. You can [see and play it here](https://ewelinaki.github.io/ScrabbleFrontend/game).

[![Audi R8](http://img.youtube.com/vi/S3CJhOMd_aM/0.jpg)](https://youtu.be/S3CJhOMd_aM)


## Dependencies

- Angular 7
- Angular Material
- Bootstrap 4

## Backend server

If you want to run the backend server go to [this repository](https://github.com/WeronikaDebowska/Scrabble-Backend).

## Development server

To view this project first run `npm install` and then `ng serve -o` to start a dev server. Your default browser will automatically open http://localhost:4200/ address.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Deploy

```
git checkout -b gh-pages
ng build --prod --base-href https://EwelinaKi.github.io/ScrabbleFrontend/
ngh --dir=dist/frontend
```
