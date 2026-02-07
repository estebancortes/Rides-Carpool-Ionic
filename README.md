# IONIC 5 Carpool App (V2.0.1)
This is a generic Carpooling App made in Ionic 5 Framework. This app can be used with any back-end.

This is an ionic project. You need to have Cordova and latest Ionic CLI installed on the system to run it successfully.

Detailed documentation of the features, installation and setup can be found at [Carpool App Documentation](https://enappd.gitbook.io/ionic-4-carpool-app-starter/) (The documentation works the same for both Ionic 4 & Ionic 5 as well)


## Using IONIC 5 CARPOOL APP

#### Node

This project is tested on latest stable version of Node 12.16.1. Make sure you have a node version close to this.

You can download the correct version from the [download page](https://nodejs.org/en/download/) for node.

To verify the node installation, open a new terminal window and run:

```
$ node --version
npm
```

#### Cordova

You must have cordova installed prior to this. Install Cordova using


```
$ npm install -g cordova
```

The `ios-sim` and `ios-deploy` are utilities that deploy apps to the iOS simulator and iOS devices during development. They can be installed globally with npm.

```
$ npm install -g ios-sim
$ brew install ios-deploy
```

#### Ionic

Install Ionic globally using

```
$ npm install -g ionic
```

## Installation of this project

* Extract the zip file you received after purchase

* Install npm dependencies

```
$ npm install
```
* Install Resources
```
$ ionic cordova resources
```

* Add Platform (whichever required)
```
$ ionic cordova platform add android

$ ionic cordova platform add ios
```

in few cases, you might need to install the latest platform

```
$ ionic cordova platform add android@latest

$ ionic cordova platform add ios@latest
```
* Install Plugins (whichever required. All included plugins are installed automatically with `npm i`)

```
$ ionic cordova plugin add YOUR_PLUGIN_NAME
```

* Add Google Map API key

1. In the `app.module.ts` file

```
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_API_KEY',
      libraries: ['places'],
      language: 'en',
    }),
```

Details about getting Google Maps API key [here](https://developers.google.com/maps/documentation/embed/get-api-key)

2. In `index.html` file

```

<script
    src="https://maps.google.com/maps/api/js?v=3.exp&amp;libraries=places,geometry&amp;key=YOUR_API_KEY"></script>


```


* Install Plugins (whichever required)

```
    $ ionic cordova plugin add YOUR_PLUGIN_NAME
```


## Plugins List

```
      "cordova-plugin-geolocation",
	  "cordova-plugin-whitelist",
	  "cordova-plugin-statusbar",
	  "cordova-plugin-device",
	  "cordova-plugin-splashscreen",
	  "cordova-plugin-ionic-webview",
	  "cordova-plugin-ionic-keyboard"
      "cordova-plugin-request-location-accuracy"
      "cordova-plugin-android-permissions",
      "cordova-plugin-androidx",
      "cordova-plugin-androidx-adapter",
      "cordova-plugin-camera"
```


## Run app on device

```
$ ionic cordova prepare android

$ ionic cordova prepare ios
```

You can run the apps on device or Simulators from Android Studio/Xcode for Android / iOS.

Or you can run directly from CLI

``` $ ionic cordova run android

$ ionic cordova run ios

```
(iOS might have issues running directly from CLI)

For more details on running the app on device / simulator check the official documentation [Android](https://ionicframework.com/docs/developing/android) / [iOS](https://ionicframework.com/docs/developing/ios)

#### Android Prodction APK

* Create signing key for android to release on Google Play

```
$ keytool -genkey -v -keystore keystore folder address -alias app alias -keyalg RSA -keysize 2048 -validity 10000
```
* Create release build for Android Play Store

```
$ ionic cordova build android --release
```

* Sign the unsigned APK for upload on Play store

```
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore file full path unsigned apk full path app alias
```
* Zipalign to optimize size for play store upload

```
$ ./zipalign -v 4 signed apk full path path for final APK
```