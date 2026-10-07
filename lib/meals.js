import sql from 'better-sqlite3';
import fs from "node:fs"
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export async function getMeals() {

    await new Promise((resolve) => setTimeout(resolve, 10000))

    /*
    prepare: used to prepare the query for db
    all: is used for fetching data
    */

    //   throw("something happended");
    const meals = db.prepare("Select * from meals").all();
    return meals;
}

export function getMeal(slug){

    const meal = db.prepare("Select * from meals where slug = ?").get(slug);
    return meal;

}

export async function saveMeal(meal){

    //automatically creates a slug from the meal.title
    meal.slug = slugify( meal.title, {
        lower:true
    });

    //Sanitizing the instructions data,
    // so that there is nothing mallicious in it.
    meal.instructions = xss(meal.instruction);
    
    //because we want to store good name 👇
    const extension = meal.image.name.split(".").pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.WriteStream(`public/images/${fileName}`);

    /*Self note: One thing to note is that meal.image is browser file object
        so we need to convert it to suitable form for NodeJS env/server
    */

    //An aary buffer is a chunk of raw binary memory//
    // it returns back a promise and the raw binary content of this image//
    const bufferedImage = await meal.image.arrayBuffer();
    console.log(bufferedImage);
    const buffer = Buffer.from(bufferedImage);
    console.log(buffer);

    stream.write(buffer, (error)=>{
            if(error){
                throw new Error("Saving failed");
            }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(`
        INSERT INTO meals (title, summary, instructions, 
        creator, creator_email, image, slug) VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
        )
        `).run(meal);
    
}