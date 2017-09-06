# ng4-ngrx-starter-project

![ngrx-and-ng4](https://github.com/AjanthaB/ng4-ngrx-starter-project/blob/gh-pages/docs/img/ng4-ngrx.png)

## This starter project is Angular-4 ngrx project which is configured to use multiple reducers and states.

## What is @ngrx/store ?

Ngrx/store is a Redux inspired library for Angular 2. It operates on many of the same concepts: actions, reducers, and a single store. The unique part here is that the DNA of ngrx/store is all about RXJS. Observables are at the heart of what makes ngrx/store tick.

### This project is configured for use 
* **[@ngrx/effect](https://github.com/ngrx/store)** 
* **[@ngrx/store](https://github.com/ngrx/effects)**

## To run this project clone the project and run 
```javascript
npm install
```

## Introduction

* **[Reactive Angular 2 with ngrx (video)](https://youtu.be/mhA7zZ23Odw)**
* **[Comprehensive Introduction to @ngrx/store](https://gist.github.com/btroncone/a6e4347326749f938510)**
* **[@ngrx/store in 10 minutes (video)](https://egghead.io/lessons/angular-2-ngrx-store-in-10-minutes)**
* **[Build Redux Style Applications with Angular2, RxJS, and ngrx/store (video)](https://egghead.io/courses/building-a-time-machine-with-angular-2-and-rxjs)**



### you can add any number of states and reducers

```javascript
export interface GlobalState {
  user: UserState // can defined multiple states here
}

const reducers = {
  user: UserReducer // you can add multiple reducers here
}

```


