import { useEffect } from "react";

interface PageHeadProps {
  title: string;
  description: string;
}

const PageHead = ({ title, description }: PageHeadProps) => {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  return null;
};

export default PageHead;
