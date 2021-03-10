/*
    File contains all database, auth and storage references
*/

import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

export const AUTH = auth();
export const FIREBASE = firebase;

export const DB_REF = database().ref();
export const STORAGE_REF = storage().ref();

export const USER_REF = database().ref('users');