# How to publish multi-packages with libraries using Lerna

1. You need to install Lerna with "npm i lerna" if you using npm or "yarn add lerna" if you using yarn.
2. In project where you want use lerna type in command line "lerna init". In the root of the project will be created "packages" folder.
3. After you need to build your library. Use "npm build" in your command line or "ng build" if it's Angular application.
4. Before publishing you need to be sure what your project use git remotly, your changes are staged and you logged in npm.
5. When library or libraries is builded in packages and you want to publish that to npm use "lerna publish" command.
6. Then you can find your package on https://www.npmjs.com in your profile packages.

# LernaAngularExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
