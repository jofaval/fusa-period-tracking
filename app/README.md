# Application #

## Contents

1. [Usage](#usage)
    1. [Pre-requisites](#pre-requisites)
    1. [How to start the app](#how-to-start-the-app)
    1. [How to deploy the app](#how-to-deploy-the-app)
    1. [How to test the app](#how-to-test-the-app)

## Usage
[↑ Table of contents](#contents)

It uses vue, with vite, since it uses vite, it already provides some utility commands.

### Pre-requisites
[↑ To the section](#usage)

You'll need to have node.js install in your system to run the application locally. It could also be delivered on-premise (not the intended way though).

I'm currently using:

- node.js (v15.14.0)
- npm (8.11.0)

### Start
[↑ To the section](#usage)

Kind of simple, if you've met the requirements

```shell
npm run dev
```

So you can now head to:

```
https://localhost:3000
```

### Deployment
[↑ To the section](#usage)

You can just execute the following command.

```shell
npm run build
```

And move the `app/dist/` folder it genereted to the path you want to application in.
This process can be completely be automated.

### Run tests
[↑ To the section](#usage)

The following command, using vitest, will be testing on watch mode, which means it won't exit, and as soon as you make a change, it will refresh the test you modified, a little more complex than that, but until that I kind of comprehend.

```shell
npm run test
```

### Run coverage
[↑ To the section](#usage)

If you want the coverage, and this one won't execute on watch mode, meaning, once finished, it will stop.

```shell
npm run coverage