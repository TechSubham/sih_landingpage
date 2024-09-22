"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", High: 186, Severe: 80 },
  { month: "February", High: 305, Severe: 200 },
  { month: "March", High: 237, Severe: 120 },
  { month: "April", High: 73, Severe: 190 },
  { month: "May", High: 209, Severe: 130 },
  { month: "June", High: 214, Severe: 140 },
];

const chartConfig = {
  High: {
    label: "High",
    color: "hsl(var(--chart-1))",
  },
  Severe: {
    label: "Severe",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function LineChartComponent() {
  return (
    <Card className="w-full border-none bg-transparent shadow-none">
      {/* Heading */}
      <CardHeader className="items-center pb-0 flex justify-center align-middle flex-row space-x-3">
        <CardTitle className="text-3xl text-gray-500 font-bold relative top-1">Timeline </CardTitle>
        <CardTitle className="text-3xl text-red-600 font-bold">Vulnerability </CardTitle>
        <CardTitle className="text-3xl text-gray-500 font-bold"> Received </CardTitle>
      </CardHeader>

      {/* Line Chart */}
      <CardContent className="flex justify-center">
        <ChartContainer config={chartConfig} className="w-full h-[220px]">
          <LineChart
            accessibilityLayer
            data={chartData}
            width={300} 
            height={300} 
            margin={{
              top: 10,
              left: 12,
              right: 12,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Shortens month names
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="High"
              type="monotone"
              stroke="var(--color-High)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Severe"
              type="monotone"
              stroke="var(--color-Severe)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      {/* Additional Text */}
      <CardFooter className="text-lg text-muted-foreground text-center text-blue-600">
        We will keep a record of the vulnerabilities you received, tracking when and how many you received over time.
      </CardFooter>
    </Card>
  );
}