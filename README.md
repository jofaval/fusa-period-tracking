# FUSA #

An open-source gender-neutral period-tracking app that leaves data management in it's totally to the end user.

## Inspiration

From [Jessica Khoury](https://twitter.com/jkbibliophile)'s tweet [https://twitter.com/jkbibliophile/status/1540345161955385345](https://twitter.com/jkbibliophile/status/1540345161955385345)

```
Delete your period tracking apps today.
```

## Contents

1. [Description](#description)
1. [Tech Stack](#tech-stack)
1. [Objectives and requirements](#objectives-and-requirements)
1. [Product](#product)
    1. [Description](#description-1)
    1. [Why?](#why)
    1. [Roadmap](#roadmap)
1. [Deployment](#deployment)
1. [Usage](#usage)
    1. [Pre-requisites](#pre-requisites)
    1. [How to start the app](#how-to-start-the-app)
    1. [How to deploy the app](#how-to-deploy-the-app)
    1. [How to test the app](#how-to-test-the-app)
1. [Legal notice](#legal-notice)
1. [Acknowledgements](#acknowledgements)

## Description
[↑ Table of contents](#contents)

A period tracking app based on the premise that no server will store the data, not even temporarily (and this is an important and crucial part of the project's idea).

## Tech Stack
[↑ Table of contents](#contents)

- Vue3
- Typescript
- Vite
- Tailwind
- Vitest + Cypress

## Objectives and requirements

For the up-to-date document defining the requirements and objectives, please, refer to the [REQUIREMENTS.md](./REQUIREMENTS.md) document.

## Product
[↑ Table of contents](#contents)

### Description
[↑ To the section](#product)

It's going to be a period tracking app based on the premise that the user will have total and full access and control to their data, and it will be gender-neutral and customizable to an extent (as much as I'm able to do and acknowledge).

### Why?
[↑ To the section](#product)

The situation in USA at the moment of development is out of control, it has put, not only women, but any fertile, person with a uterus at high risk, so, currently, having a period tracking app may put you in danger since they may be selling your data (which, if not most, a lot of them are! More on that on the following article [How period tracking apps and data privacy fit into a post-Roe v. Wade climate](https://t.co/1Zss963iET)).

Periods are also something that as a cis male, I don't know that much about, but I'm ready to learn all that I can, and is also a strong point I'm looking forward

### Roadmap
[↑ To the section](#product)

It is specified, visible and up-to-date at the [Github Projects](https://github.com/users/jofaval/projects/1/views/7).

## Deployment
[↑ Table of contents](#contents)

It will be deployed on Github Pages for the moment being. I might end up using VercelJS in the future, but it's something I have not properly considered.

## Usage
[↑ Table of contents](#contents)

It uses vue, with vite, since it uses vite, it already provides some utility commands.

### Pre-requisites
[↑ To the section](#usage)

You'll need to have node.js install in your system to run the application locally. It could also be delivered on-premise (not the intended way though).

I'm currently using:

- node.js (v15.14.0)
- npm (8.11.0)

### How to start the app
[↑ To the section](#usage)

Kind of simple, if you've met the requirements

```shell
npm run dev
```

So you can now head to:

```
https://localhost:3000
```

### How to deploy the app
[↑ To the section](#usage)

You can just execute the following command.

```shell
npm run build
```

And move the `app/dist/` folder it genereted to the path you want to application in.
This process can be completely be automated.

### How to test the app
[↑ To the section](#usage)

The following command, using vitest, will be testing on watch mode, which means it won't exit, and as soon as you make a change, it will refresh the test you modified, a little more complex than that, but until that I kind of comprehend.

```shell
npm run test
```

If you want the coverage, and this one won't execute on watch mode, meaning, once finished, it will stop.

```shell
npm run coverage
```

## Legal notice
[↑ Table of contents](#contents)

It attempts to be as crystal clear as possible, but no data is intended to be stored at any other device that your own. To be shared with no one but who you consent by directly sending your data with whatever security you mean necessary and required, at your own risk. Be safe out there!

## Acknowledgements
[↑ Table of contents](#contents)

- To [Jessica Khoury](https://twitter.com/jkbibliophile) for her viral tweet putting to the light such a serious problem.
- To all the people with uterus in USA that at such level of risk because of old jerks.