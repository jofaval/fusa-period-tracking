# Technology stack #

A little bit more insight into the technologies I chose for this project, and my reasoning.

## Technologies

1. [Vue.js](#vuejs)
    1. [Pinia](#pinia)
    1. [Vite](#vite)
1. [Tailwind](#tailwind)
1. [IndexDB](#indexdb)
1. [Vitest + Cypress](#vitest--cypress)

## Vue.js

A really popular front-end framework, and the youngest of the triad, still, is powerful and with a great ecosystem, it has a defined way of structuring and best practices, coming from React it has a different life cycle at times. But it is efficient, with a small bundle size and a syntax that's actually pretty comfortable to work with, even more so since they implemented JSX.

### Pinia

Vuex days are over, pinia is a conceptually simplified store management for vue and it's become the new store manager in Vue's ecosystem. It's syntax also got simplified.

### Vite

Bundled with vite instead of vue-cli because of it's popularity and the straight recomendation from Evan You himself, which should be, and is, more than enough to choose it. It's fast and easy to understand, and it's one of the core pilars of Vue, and so will be for versions to come.

## Tailwind

Bootstrap was really popular a few years ago, mainly because of it's easeness of quickly adding styles to a component/HTML element, that's no longer needed (Boostrap), tailwind allows us to do exactly that in a more efficient manner and far more customizable (easily). And with it's new JIT (Just-In-Time) you can only deliver what's actually being used to the client.

## IndexDB

This is not a technology per se that you can actually install like the rest of the packages here, but it is a technology I've decided to use because it provides persisten storage, which is something I wanted from start for the app. And it also provides a layer of abstraction with an API to simulate a DB-like environment so that data can be inserted/extracted via transactions and operations.

## Vitest + Cypress

From vite, vitest allows us to unit test our modules, dependencies and components, it's the new testing package, and, although it's "experimental" it has potential, it's part of the vue ecosystem. It also allows for in-time retesting of packages.

While cypress is the go to for end-to-end (e2e) testing, really easy to use, and with a lot of help for the initial configuration. It's a really nice way to cover e2e and integration test with an easilbly maintanable syntax.