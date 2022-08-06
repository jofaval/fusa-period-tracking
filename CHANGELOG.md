# CHANGELOG #

All the changes made to this project, wether they are bugfixes, additions, modifications, etc.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2022-08-06 (v0.0.10)

### Modified

- Defined the architecture, just a little bit better

## 2022-08-05 (v0.0.10)

### Added

- Architecture section in the README as a to be defined section.

## 2022-07-30 (v0.0.9)

### Added

- An absolute path alias for imports as `'@/'`.
- Created the metrics temperature component.
- Created metrics temperature utilities tests.

### Modified

- Imports now use the aboslute path alias when necessary.
- Moved App's title to the multilang strings.

### Fixed

- Absolute path should now be completely integrated so that the build doesn't fail.

## 2022-07-30 (v0.0.8)

### Fixed

- Public path is now properly configured as `base` inside the vite config file. Github Actions now properly deploys and builds the webapp

## 2022-07-28 (v0.0.7)

### Added

- The base PWA (Progressive Web App) features are now installed

### Modified

- No logo will be shown, for the moment being that is
- i18n object is now created in it's abstract (`index.ts`) file

### Fixed

- Some pathings on imports here and there. 
- Github Actions is now correctly deploying, it wasn't due to husky's config path and inexistent types.
- Production path is now working the correct and expected path

## 2022-07-27 (v0.0.6)

### Added

- Create the base initial pinia store with the base IndexDB implementation

## 2022-07-25 (v0.0.5)

### Modified

- Added a brief description of the tech stack in the readme

### Fixed

- Fixed minor mistake of floating parenthesis in news' link

## 2022-07-25 (v0.0.4)

### Added

- Documented the tech stack and added IndexDB to the technologies stack docs
- Created the base Docker infrastructure following Vue's official docs

## 2022-07-25 (v0.0.3)

### Added

- Created and integrated the base CI/CD pipelines for deployment and Pull Requests (PRs) validations.

## 2022-07-24 (v0.0.3)

### Added

- Documentation for the Visual Identity.
- Planned a little bit the ideas and detected work to do in the Github Project.

## 2022-07-24 (v0.0.2)

### Added

- Implemented the base routing system.
- The document title will change with the route, with translations.

## 2022-07-22 (v0.0.1)

### Added

- Created the base entities prototype for this project (Pronouns, Gender and Profile)
- Created the starting wiki page

## 2022-06-27 (v0.0.0)

### Added

- Finished the chaotic first sprint

## 2022-06-26 (v0.0.0)

## Added

- Documentation and licensing, and completing the base tasks of this sprint
- Finished configuration of the base tech stack and uploaded the changes

## 2022-06-25 (v0.0.0)

### Added

- Defined, not most, but a lot of the main tasks to tackle with this project in a Github Projects
- Kept on stablishing and defining the tech stack that will be used

## 2022-06-24 (v0.0.0)

### Added

- Project started
- Research some tech stack and start the configuration process.