import ProcessTimeline from './process-timeline';
import { BrainCircuit, PenTool, Code2, Rocket } from 'lucide-react';

const processSteps = [
    { name: 'Discover', icon: <BrainCircuit className="h-6 w-6" />, description: "We start with a deep dive into your goals, audience, and challenges to build a solid strategic foundation." },
    { name: 'Design', icon: <PenTool className="h-6 w-6" />, description: "Our team creates wireframes and high-fidelity mockups, focusing on intuitive UX and stunning visual design." },
    { name: 'Develop', icon: <Code2 className="h-6 w-6" />, description: "Our engineers bring the designs to life with clean, efficient code and robust back-end architecture." },
    { name: 'Deploy', icon: <Rocket className="h-6 w-6" />, description: "After rigorous testing, we launch your project and provide ongoing support to ensure continued success." },
];

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-headline font-bold">Our Process</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A streamlined journey from concept to launch, ensuring quality and transparency at every stage.
                </p>
            </div>
            <ProcessTimeline steps={processSteps} />
        </div>
    </section>
  );
}
