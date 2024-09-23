import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PieChartComponent } from "./Piechart";
import { LineChartComponent } from "./LineChart";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GmailCard from "@/app/Elements/GmailCard";

export function CarouselCard() {
  return (
    <Carousel className="w-full md:w-[80%] lg:w-[65%] mx-auto md:ml-20 lg:ml-40">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex items-center justify-center p-2 sm:p-4 md:p-6">
                  {index === 0 && (
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
                      <PieChartComponent />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
                      <LineChartComponent />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
                      <GmailCard />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}