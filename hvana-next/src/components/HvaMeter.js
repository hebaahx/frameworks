export default function HvaMeter() {
  return (
    <section className="meter">
      <p className="meter-score">HvA-Meter <strong>5,9</strong></p>
      <button className="votes-button" type="button">33 stemmen</button>
      <span className="meter-today">vandaag</span>
      <p className="meter-question">Welk cijfer geef jij je dag?</p>
      <button className="vote-button" type="button">Stem →</button>
    </section>
  );
}