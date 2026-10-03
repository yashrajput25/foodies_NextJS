
import { getMeals } from '@/lib/meals'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid';

export default async function MealsPage(){

    const meals = await getMeals();

    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created <span className={classes.highlight}>
                    by you
                </span>
            </h1>
            <p>Choose your ...</p>
            <p className={classes.cta}>
                <Link href='/meals/share'>
                Share your favourite recipe
                </Link>
            </p>

        </header>
        <MealsGrid meals={meals}/>
    </>
    
}