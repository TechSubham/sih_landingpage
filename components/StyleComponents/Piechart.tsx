// "use client";
// import * as React from "react";
// import { TrendingUp } from "lucide-react";
// import { Label, Pie, PieChart } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartConfig,
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";

// export const description = "A donut chart with text";

// const chartData = [
//   { browser: "High", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "Severe", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "Medium", visitors: 287, fill: "var(--color-firefox)" },
//   { browser: "Important", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "Moderate", visitors: 190, fill: "var(--color-other)" },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },
// } satisfies ChartConfig;

// export function PieChartComponent() {
//   const totalVisitors = React.useMemo(() => {
//     return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
//   }, []);

//   return (
//     <Card className="flex flex-col border-none bg-transparent shadow-none">
//       {/* Heading */}
//       <CardHeader className="items-center pb-0 flex flex-row space-x-3">
//         <CardTitle className="text-3xl text-gray-500 font-bold relative top-1">Severity of </CardTitle>
//         <CardTitle className="text-3xl text-red-600 font-bold">Vulnerability </CardTitle>
//         <CardTitle className="text-3xl text-gray-500 font-bold"> Received </CardTitle>
//       </CardHeader>

//       {/* Pie Chart */}
//       <CardContent className="flex-1 pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[280px]"
//         >
//           <PieChart>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <Pie
//               data={chartData}
//               dataKey="visitors"
//               nameKey="browser"
//               innerRadius={60}
//               strokeWidth={5}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-2xl font-bold"
//                         >
//                           Severity
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >

//                         </tspan>
//                       </text>
//                     );
//                   }
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//       </CardContent>

//       {/* Discussion */}
//       <CardFooter className="flex-col gap-2 text-lg text-muted-foreground text-blue-600">
//         We Provide you the information about the Severity of the Vulnerability received
//       </CardFooter>
//     </Card>
//   );
// }

"use client";
import * as React from "react";
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
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

export const description = "A responsive donut chart with text";

const chartData = [
  { browser: "High", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Severe", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Medium", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "Important", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Moderate", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "hsl(var(--chart-1))" },
  safari: { label: "Safari", color: "hsl(var(--chart-2))" },
  firefox: { label: "Firefox", color: "hsl(var(--chart-3))" },
  edge: { label: "Edge", color: "hsl(var(--chart-4))" },
  other: { label: "Other", color: "hsl(var(--chart-5))" },
} satisfies ChartConfig;

export function PieChartComponent() {
  return (
    <Card className="w-full max-w-3xl mx-auto flex flex-col border-none bg-transparent shadow-none">
      
      <CardTitle className="  text-center items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
        <span className="text-lg sm:text-3xl lg:text-3xl text-gray-500 font-bold">
          Severity of
        </span>
        <span className="text-lg sm:text-3xl lg:text-3xl text-red-600 font-bold ml-2">
          Vulnerability
        </span>
      </CardTitle>

      <CardContent className="flex-1 pb-4">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]"
        >
          <ResponsiveContainer width="80%" height="80%">
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                outerRadius={100}
                // strokeWidth={5}
                strokeWidth={3}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-base sm:text-lg md:text-xl lg:text-2xl font-bold"
                          >
                            Severity
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>

      <CardFooter className="text-center text-blue-600 lg:relative lg:bottom-8 px-4">
        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-blue-500 ">
          We provide you information about the Severity of the Vulnerability
          received
        </p>
      </CardFooter>
    </Card>
  );
}
