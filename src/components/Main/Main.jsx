import Activity from "./components/Activity/Activity";
import Services from "./components/Services/Services";
import Values from "./components/Values/Values";
import Team from "./components/Team/Team";
import "./Main.scss";

export default function Main() {
  return (
    <main className="Main">
      <Values />
      <Services />
      <Activity />
      <Team />
    </main>
  );
}
