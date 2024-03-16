"use client";

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

interface CardWrapperProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  linkHref?: string;
  linkText?: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({
  title,
  description,
  children,
  linkHref,
  linkText,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-col items-center gap-3">
        {title && (
          <CardTitle className="text-xl font-medium">{title}</CardTitle>
        )}
        {description && (
          <CardDescription className="text-sm font-light">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        {linkHref && (
          <Button variant={"link"} className="w-full text-center">
            <Link href={linkHref}>{linkText}</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
