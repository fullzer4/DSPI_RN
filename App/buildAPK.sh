#!/usr/bin/env sh

_() {
  cd android
  ./gradlew assembleRelease
  cd ..
} && _

unset -f _