### Set ANDROID_HOME env variable to /home/darren/Android/Sdk
 - This should be set in .profile but for now just set in terminal
### Downloaded latest version of gradle
    - Dropped this into /home/darren/Android/Sdk/gradle-4.2.1
    - Added this path to $PATH

When I now run `ionic run android` I get the error `Error: Cannot find module 'android-versions'`

Check this [SO post](https://stackoverflow.com/questions/46624894/ionic-error-cannot-find-module-android-versions) for solution.
