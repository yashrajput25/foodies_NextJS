import Link from "next/link";
import classes from './page.module.css';
import ImageSlideShow from "@/components/images/image-slideshow";

//Main Home Page

export default function Home() {
  return (
    <>
      <header>
        <div className={classes.slideshow}> <ImageSlideShow /></div>
        <div className={classes.hero}>
          <h1>NextLevel Food for NextLevel Foodies</h1>
          <p>Taste & share food from all over the world.</p>
        </div>

        <div className={classes.cta}>
          <Link href='/community'>
            Join the Community
          </Link>

          <Link href='/meals'>
            Explore Meals
          </Link>
        </div>
      </header>
      <main>



      </main>

    </>
  );
}
