
import Header1 from "@/components/alternative1/Header1";
import Hero1 from "@/components/alternative1/Hero1";

const IndexAlt1 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <main className="flex-grow">
        <Hero1 />
      </main>
    </div>
  );
};

export default IndexAlt1;
