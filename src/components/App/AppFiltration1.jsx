import Section from '@/components/Section/Section.jsx';
import PlanesList from "@/components/PlanesList/PlanesList"
import planes from '@/json/planes.json';
import helicopters from '@/json/helicopters.json';


//! Звичайний компонент
export function AppFiltration1() {
  return (
    <>
      {/*//! Літаки */}
      <Section isOn={true} title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >

      {/*//! Вертольоти */}
      <Section isOn={true} title="Магазин моделей вертольотів">
        <PlanesList items={helicopters} />
      </Section >
    </>
  );
};
