import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/cn";

interface CardWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  linkHref: string;
  linkText: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  description,
  children,
  linkHref,
  linkText,
}) => {
  return (
    <Card className={cn("")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Button variant={"link"}>
          <Link href={linkHref}>{linkText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
