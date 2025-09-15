"use client"

import * as React from "react"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Label, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"

const chartData = [
  { skill: "Front-End", proficiency: 95 },
  { skill: "UI Design", proficiency: 90 },
  { skill: "Branding", proficiency: 75 },
  { skill: "Back-End", proficiency: 80 },
  { skill: "UX Research", proficiency: 85 },
  { skill: "DevOps", proficiency: 70 },
]

const chartConfig = {
  proficiency: {
    label: "Proficiency",
    color: "hsl(var(--primary))",
  },
} satisfies React.ComponentProps<typeof ChartContainer>["config"]

export default function Toolbox() {
  return (
    <section id="toolbox" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
             <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-headline font-bold">Crafting With Precision</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A visual representation of my core competencies. I wield a versatile set of tools to bring ideas to life, from initial concept to final deployment.
                </p>
            </div>
            <div className="w-full max-w-2xl mx-auto">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-full"
                >
                    <RadarChart
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                    >
                    <ChartTooltip
                        cursor={false}
                        content={
                        <ChartTooltipContent
                            indicator="dot"
                            labelKey="proficiency"
                        />
                        }
                    />
                    <PolarGrid className="fill-background stroke-border" />
                    <PolarRadiusAxis
                        tickCount={4}
                        tick={false}
                        axisLine={false}
                        angle={30}
                    />
                    <Radar
                        dataKey="proficiency"
                        fill="var(--color-proficiency)"
                        fillOpacity={0.4}
                        stroke="var(--color-proficiency)"
                        strokeWidth={2}
                    >
                        <Label
                        dataKey="skill"
                        angle={0}
                        position="outside"
                        className="fill-foreground font-headline text-lg"
                        />
                    </Radar>
                    </RadarChart>
                </ChartContainer>
            </div>
        </div>
    </section>
  )
}
