# :zap: Ionic React Example

* App using the very latest Ionic 6 with React to show Yelp REST API data with locations on a map
* Tutorial example code from [Alan Montgomery](https://alanmontgomery.co.uk/), Senior React Dev with changes to code and SCSS colors.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-react-example?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-react-example?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-react-example?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-react-example?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic React Example](#zap-ionic-react-example)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup * Development](#floppy_disk-setup--development)
  * [:floppy_disk: Setup * Build, Android Studio](#floppy_disk-setup--build-android-studio)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Yelp REST API key required
* New Ionic 6 bottom sheet drawer modal used to show list of places, activated by an Ionfab button

## :camera: Screenshots

![Example screenshot](./img/map.png)

## :signal_strength: Technologies

* [Ionic/React v6](https://www.npmjs.com/package/@ionic/react) used to create app
* [Ionic Colour generator](https://ionicframework.com/jp/docs/fr/theming/color-generator)
* [React v17](https://reactjs.org/) JavaScript library
* [Capacitor v1](https://capacitor.ionicframework.com/docs/) cross-platform app runtime
* [React Dev Tools Chrome extension](https://chrome.google.com/webstore/detail/reactdevelopertools/fmkadmapgofadopljbjfkapdkoienihi/related) to help with debugging etc.

* [React Context](https://reactjs.org/docs/context.html) to pass data down the component tree
* [React Hook State](https://reactjs.org/docs/hooks-state.html) to use state
* [Yelp Developers](https://www.yelp.com/developers) REST API - key required
* [pigeon-maps v0.19.7](https://www.npmjs.com/package/pigeon-maps) ReactJS maps without external dependencies
* [Axios v0.21.1](https://www.npmjs.com/package/axios) promise based HTTP client for the browser and node.js

## :floppy_disk: Setup * Development

* Install dependencies using `npm i`
* Add Yelp API key to `server.js`
* `node server.js` to start server
* Run `npm run start` or `ionic serve` to open the dev server at `http://localhost:8100/`

## :floppy_disk: Setup * Build, Android Studio

* Run `ionic build` to create build files
* If you don't have it already then Install Android Studio (on Windows 10 in my case)
* Connect mobile device to Android Studio via USB. To go into dev mode on Realme 5 Pro mobile phone connected via USB to Android: Go to 'About Phone'/'Version Baseband & Kernal' in phone settings then click 7 times on 'Version' and enter phone access code. Go to Settings/Additional Settings/Developer options and enable 'USB debugging'

## :computer: Code Examples

* `Tab1.jsx` IonFab button activates IonModal that opens to display Yelp REST API search data and can be swiped to close

```jsx
<IonFab
  vertical="bottom"
  horizontal="start"
  slot="fixed"
  onClick={() => setShowListModal(!showListModal)}
>
  <IonFabButton>
    <IonIcon icon={list} />
  </IonFabButton>
</IonFab>

<IonModal
  isOpen={showListModal}
  onDidDismiss={() => setShowListModal(false)}
  swipeToClose={true}
  initialBreakpoint={0.6}
  breakpoints={[0, 0.6, 1]}
  backdropBreakpoint={0.6}
>
  <ListModal
    hideModal={() => setShowListModal(false)}
    searchTerm={searchTerm}
    search={setSearchTerm}
    records={results}
  />
</IonModal>
```

## :cool: Features

* [Side navigation drawer](https://ionicframework.com/docs/api/menu)

## :clipboard: Status & To Do List

* Status: Working
* To-Do: Nothing

## :clap: Inspiration

* [Alan Montgomery: First look at the Ionic Bottom Sheet Drawer with map - Ionic V6 Beta (React)](https://www.youtube.com/watch?v=U2mdZrO5Hlc)
* [Github: ionic-restaurant-finder](https://github.com/alanmontgomery/ionic-restaurant-finder)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com