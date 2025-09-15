'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate descriptions for each step in a process overview timeline.
 *
 * @fileOverview
 * - generateProcessDescriptions - A function that generates descriptions for the process overview timeline.
 * - GenerateProcessDescriptionsInput - The input type for the generateProcessDescriptions function.
 * - GenerateProcessDescriptionsOutput - The return type for the generateProcessDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProcessDescriptionsInputSchema = z.object({
  steps: z.array(
    z.string().describe('The name of a step in the process.')
  ).describe('The names of steps in the process overview timeline.'),
});
export type GenerateProcessDescriptionsInput = z.infer<typeof GenerateProcessDescriptionsInputSchema>;

const GenerateProcessDescriptionsOutputSchema = z.object({
  descriptions: z.array(
    z.string().describe('A description for a step in the process.')
  ).describe('The descriptions for each step in the process overview timeline.'),
});
export type GenerateProcessDescriptionsOutput = z.infer<typeof GenerateProcessDescriptionsOutputSchema>;

export async function generateProcessDescriptions(input: GenerateProcessDescriptionsInput): Promise<GenerateProcessDescriptionsOutput> {
  return generateProcessDescriptionsFlow(input);
}

const generateProcessDescriptionsPrompt = ai.definePrompt({
  name: 'generateProcessDescriptionsPrompt',
  input: {schema: GenerateProcessDescriptionsInputSchema},
  output: {schema: GenerateProcessDescriptionsOutputSchema},
  prompt: `You are an expert copywriter specializing in generating engaging and informative descriptions for process steps. Given a list of process steps, create a concise and compelling description for each step.

Steps: {{steps}}

Descriptions: A JSON array of strings containing a description for each step.  The descriptions should be no more than 2 sentences each.`,
});

const generateProcessDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateProcessDescriptionsFlow',
    inputSchema: GenerateProcessDescriptionsInputSchema,
    outputSchema: GenerateProcessDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await generateProcessDescriptionsPrompt(input);
    return output!;
  }
);
