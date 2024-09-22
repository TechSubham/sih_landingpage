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
    <Carousel className="w-[65%] ml-40">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex items-center justify-center p-6">
                  {index === 0 && (
                    <div className="w-full h-[400px]">
                      <PieChartComponent />
                    </div>
                  )}
                  {index === 1 && (
                    <div className=" h-[400px]">
                      <LineChartComponent />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-full h-[400px]">
                      <GmailCard />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}