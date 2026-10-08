    import { getMeal } from "@/lib/meals"
    import classes from './page.module.css'
    import Image from "next/image";


    export async function generateMetadata({params, searchParams}, parent){
        const meal = await getMeal(params.mealSlug);

        return {
            title: meal.title,
            description: meal.summary
        }
    }

    export default function MealsDetailPage({ params }) {
        const meal = getMeal(params.mealSlug)
        return <>
                    <header className={classes.header}>
            <div className={classes.image}>
            <Image
                src={`https://yashrajput-nextjs-user-image.s3.ap-southeast-2.amazonaws.com/${meal.image}`}
                alt={meal.title}
                fill
            />
            </div>
            <div className={classes.headerText}>
            <h1>{meal.title}</h1>
            <p className={classes.creator}>
                by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
            </p>
            <p className={classes.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{
                __html: meal.instructions,
            }}
            ></p>
        </main>
        </>
    }