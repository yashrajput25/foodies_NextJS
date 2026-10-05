
import { getMeals } from '@/lib/meals'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid';
import { Suspense } from 'react';
import classe from './loading.module.css'


async function Meals(){
    const meals = await getMeals();

    return <MealsGrid meals={meals}/>
}

export default async function MealsPage(){

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

            <Suspense fallback={<p className={classe.loading}>Fetching details....</p>}>
                <Meals/>
            </Suspense>
        
    </>
    
}