import { getMeal } from "@/lib/meals"


export default function MealID({ params }) {
    const meal = getMeal(params.mealSlug)
    return <div>
        <h1> Some slug meal </h1>
        <h2>({meal.title})</h2>
        <h2>({meal.summary})</h2>
    </div>
}