"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
// Load Firebase service account key (download this JSON file from Firebase Console)
const serviceAccount = require('../serviceAccountKey.json');
// Initialize Firebase Admin SDK
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccount),
    });
}
// Firestore instance
const firestore = firebase_admin_1.default.firestore();
exports.default = firestore;
//# sourceMappingURL=firestoreService.js.map