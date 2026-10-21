import Section from "@/components/Section/Section.jsx";
import PlanesList from "@/components/PlanesList/PlanesList.jsx";
// import planes from "../../json/planes.json";
import planes from '@/json/planes.json'; //! --> ✅✅✅Аліаси імпортів з абсолютними шляхами з jsconfig.json

import './App.css'; //! Ванільний CSS (Vanilla CSS) 

export function App() {
    return (
        <Section title="Коллекція літаків">
            <PlanesList items={planes} />
        </Section>
    )
}