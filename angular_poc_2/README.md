# AngularPoc2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Task details

1. Create 2 new components: well-list and well - DONE

2. Create a an array of objects to store wells information like name, type and sourcekey  in well-list componenet - DONE

3. Display the wells information like below use ngClass and NgStyle to change the background-color and text-color depending on the type - DONE

4. Create a form with below inputs in well componenet with a Add button. - DONE

5. pass sourceKey from parent to child and in view it should be disabled.

6. Create a well and pass it parent using Output directive so that it gets displayed in the list on click of Add button. - DONE

Also make use of ElementRef to pass the value from view to component.

From the parent component when you click on the source key, it will show the well component with the sourceKey populated by default and disabled since you clicked on it..

There can be many wells added associated to a source key.

You can hard code a couple of unique source keys.

https://stackblitz.com/edit/angular-viewchild-datapass-vz54vb

angular-viewchild-datapass-vz54vb - StackBlitz
Starter project for Angular apps that exports to the Angular CLI
stackblitz.com

Passing data from child using template reference.

Template reference is yet another way to pass native DOM data or have access to native DOM.
