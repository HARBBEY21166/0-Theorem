import { generateProcessDescriptions } from '@/ai/flows/generate-process-descriptions';
import ProcessTimeline from './process-timeline';
import { BrainCircuit, PenTool, Code2, Rocket } from 'lucide-react';

const processSteps = [
    { name: 'Discover', icon: <BrainCircuit className="h-6 w-6" /> },
    { name: 'Design', icon: <PenTool className="h-6 w-6" /> },
    { name: 'Develop', icon: <Code2 className="h-6 w-6" /> },
    { name: 'Deploy', icon: <Rocket className="h-6 w-6" /> },
];

export default async function Process() {
  const stepNames = processSteps.map(step => step.name);
  let descriptions: string[] = [
    "We start with a deep dive into your goals, audience, and challenges to build a solid strategic foundation.",
    "Our team creates wireframes and high-fidelity mockups, focusing on intuitive UX and stunning visual design.",
    "Our engineers bring the designs to life with clean, efficient code and robust back-end architecture.",
    "After rigorous testing, we launch your project and provide ongoing support to ensure continued success."
  ];

  try {
    const result = await generateProcessDescriptions({ steps: stepNames });
    if (result?.descriptions?.length === stepNames.length) {
      descriptions = result.descriptions;
    }
  } catch (error) {
    console.error("Failed to generate process descriptions, using fallback.", error);
  }

  const stepsWithDescriptions = processSteps.map((step, index) => ({
    ...step,
    description: descriptions[index],
  }));

  return (
    <section id="process" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-headline font-bold">Our Process</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A streamlined journey from concept to launch, ensuring quality and transparency at every stage.
                </p>
            </div>
            <ProcessTimeline steps={stepsWithDescriptions} />
        </div>
    </section>
  );
}
