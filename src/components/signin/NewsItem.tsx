
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface NewsItemProps {
  date: string;
  title: string;
  description: string;
  link: string;
  tag: string;
  tagColor: string;
}

const NewsItem = ({ date, title, description, link, tag, tagColor }: NewsItemProps) => {
  return (
    <div className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-sm text-gray-500">{date}</p>
        <Badge className={`${tagColor}`}>{tag}</Badge>
      </div>
      <h3 className="text-lg font-semibold text-anthracite mb-1">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <Link to={link} className="text-sm font-medium text-yellow-700 hover:text-yellow-800 hover:underline flex items-center">
        Read more <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

export default NewsItem;
