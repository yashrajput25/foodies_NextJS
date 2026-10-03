import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {

    await new Promise((resolve) => setTimeout(resolve, 10000))

    /*
    prepare: used to prepare the query for db
    all: is used for fetching data
    */
    const meals = db.prepare("Select * from meals").all();
    return meals;
}