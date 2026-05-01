import SectionTitle from "./SectionTitle";

function Section({ title, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 md:py-24 min-h-screen flex flex-col justify-center">
      {title && <SectionTitle className="mt-0 mb-6">{title}</SectionTitle>}

      {children}
    </section>
  );
}

export default Section;
