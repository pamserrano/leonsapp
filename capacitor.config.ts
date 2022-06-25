import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'moodlemobile',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      permissions: 'none',
      orientation: 'default',
      'target-device': 'universal',
      fullscreen: 'false',
      'stay-in-webview': 'false',
      webviewbounce: 'false',
      UIWebViewBounce: 'false',
      DisallowOverscroll: 'true',
      'prerendered-icon': 'true',
      AppendUserAgent: 'MoodleMobile 4.1.0-dev (41000)',
      BackupWebStorage: 'none',
      ScrollEnabled: 'false',
      KeyboardDisplayRequiresUserAction: 'false',
      HideKeyboardFormAccessoryBar: 'false',
      AllowInlineMediaPlayback: 'true',
      LoadUrlTimeoutValue: '60000',
      'load-url-timeout': '60000',
      SplashScreen: 'screen',
      SplashScreenDelay: '15000',
      SplashMaintainAspectRatio: 'true',
      SplashShowOnlyFirstTime: 'false',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '30',
      AndroidPersistentFileLocation: 'Compatibility',
      AndroidInsecureFileModeEnabled: 'true',
      CustomURLSchemePluginClearsAndroidIntent: 'true',
      iosPersistentFileLocation: 'Compatibility',
      iosScheme: 'moodleappfs',
      WKWebViewOnly: 'true',
      WKFullScreenEnabled: 'true',
      AndroidXEnabled: 'true',
      GradlePluginGoogleServicesEnabled: 'true',
      GradlePluginGoogleServicesVersion: '4.3.10',
      StatusBarOverlaysWebView: 'false'
    }
  }
};

export default config;
