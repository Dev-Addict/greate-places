import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('places.db');

export const init = () => {
    return new Promise(((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL, lat REAL NOT NULL, lon REAL NOT NULL);',
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    }));
};