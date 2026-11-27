import SiteHeader from "@/components/SiteHeader";
import HvaMeter from "@/components/HvaMeter";
import ArticleCard from "@/components/ArticleCard";

export default function Home() {
  return(
    <>
      <SiteHeader />
      <HvaMeter />

      <main className="featured">
        <ArticleCard
          large
          heading="Steeds meer van mijn studie gebeurt achter een scherm."
          image="/img/card-1.jpg"
          alt="Studenten voor een gebouw"
        />
        <ArticleCard
          heading="Steeds meer van mijn studie gebeurt achter een scherm."
          image="/img/card-2.jpg"
          alt="Portret van een studente"
        />
        <ArticleCard
          heading="Steeds meer van mijn studie gebeurt achter een scherm."
          image="/img/card-3.jpg"
          alt="Zaal met presentatie"
        />
      </main>
    </>
  ) ;  
}