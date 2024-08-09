import CallToAction from "@/components/home/CallToAction";
import FeaturedCarousel from "@/components/home/FeaturedCarousel";
import LatestRecipes from "@/components/home/LatestRecipes";
import PopularCategories from "@/components/home/PopularCategories";

export default function Home() {
  return (
    <>
      <FeaturedCarousel />
      <LatestRecipes />
      <PopularCategories />
      <CallToAction />
    </>
  );
}
