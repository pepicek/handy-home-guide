
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, FileText, Link as LinkIcon, Share2 } from "lucide-react";

const newsData = [
  {
    id: "1",
    title: "YelloPago Raises $30M Series B to Transform Home Services",
    date: "April 15, 2025",
    author: "Sarah Johnson",
    authorTitle: "Chief Marketing Officer",
    source: "TechCrunch",
    sourceUrl: "#",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1200&h=600&fit=crop",
    content: `
      <p class="mb-4">YelloPago, the rapidly growing home services marketplace, today announced it has raised $30 million in Series B funding led by Accel Partners, with participation from existing investors Sequoia Capital and Founders Fund.</p>
      
      <p class="mb-4">The new capital will be used to expand YelloPago's platform to 50 new metropolitan areas across the United States and enhance its technology platform with advanced AI features for service matching and scheduling optimization.</p>
      
      <p class="mb-4">"We're on a mission to transform how homeowners connect with service professionals," said Michael Chen, CEO and co-founder of YelloPago. "This funding will help us bring our platform to millions more homeowners and provide even more powerful tools for service providers to grow their businesses efficiently."</p>
      
      <p class="mb-4">Since launching in 2023, YelloPago has facilitated over 500,000 service appointments across 20 cities, with customer satisfaction ratings consistently above 4.8/5. The platform currently hosts more than 20,000 verified service providers across dozens of home service categories.</p>
      
      <p class="mb-4">"YelloPago has demonstrated impressive growth and a clear vision for modernizing the home services industry," said Jane Williams, Partner at Accel Partners, who will be joining YelloPago's board of directors. "Their focus on creating value for both homeowners and service professionals sets them apart in the market."</p>
      
      <p class="mb-4">The company plans to launch several new features in the coming months, including enhanced provider verification, an instant booking system, and specialized tools for commercial service providers.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-3">About YelloPago</h3>
      <p class="mb-4">YelloPago is a home services marketplace that connects homeowners with trusted, verified service professionals. The platform offers tools for discovery, scheduling, payments, and review management, making it easier for homeowners to find quality help and for service providers to grow their businesses. Founded in 2023, YelloPago operates in 20 metropolitan areas across the United States.</p>
    `
  },
  {
    id: "2",
    title: "Platform Connects 100,000 Service Professionals with Homeowners",
    date: "March 28, 2025",
    author: "David Wilson",
    authorTitle: "Head of Provider Relations",
    source: "Forbes",
    sourceUrl: "#",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=600&fit=crop",
    content: `
      <p class="mb-4">YelloPago announced today that it has reached a significant milestone: 100,000 verified service professionals are now active on its platform, providing services to homeowners across the country.</p>
      
      <p class="mb-4">This represents a 250% growth in provider participation over the past 12 months, making YelloPago one of the fastest-growing platforms in the home services sector.</p>
      
      <p class="mb-4">"Reaching 100,000 verified providers is a testament to the value we're creating for service professionals," said David Wilson, Head of Provider Relations at YelloPago. "Providers join our platform because we help them find new clients, streamline their operations, and grow their businesses without the overhead of traditional marketing and administrative costs."</p>
      
      <p class="mb-4">The announcement comes as YelloPago releases new data showing that providers on its platform report an average 40% increase in revenue within their first six months, while saving an average of 15 hours per week on administrative tasks.</p>
      
      <p class="mb-4">According to the company, the most popular service categories include plumbing, electrical work, landscaping, house cleaning, and general handyman services. The platform has also seen rapid growth in specialized categories such as pool maintenance, smart home installation, and sustainable energy services.</p>
      
      <p class="mb-4">"We're not just helping the large, established companies," Wilson emphasized. "Over 70% of our service providers are small businesses with fewer than five employees. Our platform gives them the digital presence and operational tools that were previously only available to larger competitors with bigger budgets."</p>
      
      <p class="mb-4">YelloPago also announced plans to expand its provider support services, including the launch of a Provider Success Academy with business development resources, certification programs, and community forums for knowledge sharing.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-3">About YelloPago</h3>
      <p class="mb-4">YelloPago is a home services marketplace that connects homeowners with trusted, verified service professionals. The platform offers tools for discovery, scheduling, payments, and review management, making it easier for homeowners to find quality help and for service providers to grow their businesses.</p>
    `
  },
  {
    id: "3",
    title: "YelloPago Expands to 50 New Cities Across the United States",
    date: "February 12, 2025",
    author: "Thomas Rodriguez",
    authorTitle: "VP of Market Expansion",
    source: "Business Wire",
    sourceUrl: "#",
    image: "https://images.unsplash.com/photo-1584924486713-5b29aa31dda4?w=1200&h=600&fit=crop",
    content: `
      <p class="mb-4">YelloPago today announced its largest expansion to date, bringing its home services marketplace to 50 new cities across the United States. This strategic growth initiative expands the company's footprint to a total of 70 metropolitan areas, reaching approximately 65% of the U.S. population.</p>
      
      <p class="mb-4">The expansion includes major markets such as Phoenix, Detroit, Minneapolis, San Antonio, and Charlotte, as well as mid-sized cities including Raleigh, Sacramento, Salt Lake City, and Cincinnati.</p>
      
      <p class="mb-4">"This expansion represents a significant step toward our goal of making high-quality home services accessible to everyone," said Thomas Rodriguez, VP of Market Expansion at YelloPago. "We've refined our city launch playbook to quickly build both supply and demand, creating value for homeowners and service providers from day one in each new market."</p>
      
      <p class="mb-4">To support the expansion, YelloPago has hired regional teams in each new market to recruit and onboard service providers, build local partnerships, and drive consumer awareness. The company has also launched localized marketing campaigns tailored to the specific service needs and seasonal patterns of each region.</p>
      
      <p class="mb-4">"We don't take a one-size-fits-all approach to new markets," Rodriguez explained. "The home service needs in Phoenix are different from those in Minneapolis, and our platform adapts to highlight the most relevant services for each location, whether that's air conditioning maintenance in the Southwest or snow removal in the Midwest."</p>
      
      <p class="mb-4">The expansion follows YelloPago's recent $30 million Series B funding round, which the company is using to fuel market growth and product development. According to the company, early data from the new markets shows strong adoption, with several cities exceeding initial projections for both provider sign-ups and consumer bookings.</p>
      
      <p class="mb-4">YelloPago anticipates completing this expansion phase by the end of Q2 2025, with plans to reach an additional 30 cities by the end of the year.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-3">About YelloPago</h3>
      <p class="mb-4">YelloPago is a home services marketplace that connects homeowners with trusted, verified service professionals. The platform offers tools for discovery, scheduling, payments, and review management, making it easier for homeowners to find quality help and for service providers to grow their businesses.</p>
    `
  }
];

const NewsDetails = () => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === id) || newsData[0];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <article>
          <div className="w-full h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite to-transparent z-10"></div>
            <img 
              src={newsItem.image} 
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto">
              <Link to="/press" className="flex items-center text-yellow-600 hover:text-yellow-700 mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Press
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold text-anthracite mb-4">
                {newsItem.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8 pb-6 border-b">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {newsItem.date}
                </div>
                
                <div className="flex items-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Originally published in {newsItem.source}
                </div>
                
                <div className="flex items-center ml-auto">
                  <Button variant="ghost" size="sm" className="h-8">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="h-8">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Copy Link
                  </Button>
                </div>
              </div>
              
              <div className="prose max-w-none prose-lg mb-10" dangerouslySetInnerHTML={{ __html: newsItem.content }}>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-800 font-bold text-xl mr-4">
                    {newsItem.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-anthracite">{newsItem.author}</p>
                    <p className="text-gray-600">{newsItem.authorTitle}, YelloPago</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-yellow-50 rounded-xl">
                <div>
                  <h3 className="font-bold text-lg mb-1">Press Contact</h3>
                  <p className="text-gray-600">press@yellopago.com</p>
                </div>
                <Link to="/press">
                  <Button className="bg-anthracite hover:bg-anthracite/90 text-yellow-400">
                    View All Press Releases
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Press Releases</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {newsData
                .filter(item => item.id !== id)
                .slice(0, 2)
                .map(item => (
                  <Link 
                    to={`/press/news/${item.id}`} 
                    key={item.id}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">
                          {item.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetails;
