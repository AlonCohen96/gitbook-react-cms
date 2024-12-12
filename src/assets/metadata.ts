// src/data.ts
import { nanoid } from 'nanoid';

// Define the Project interface
export interface Project {
    name: string;
    url: string;
    id: string;
    category: number;
}

// Export the categories array
export const categories = [
    { id: 1, name: 'Speech Sciences' },
    { id: 2, name: 'EMA Technology' },
    { id: 3, name: 'LiRI Corpus Platform' },
    { id: 4, name: 'NCCR@LiRI' },
];

// Export the projects array
export const projects: Project[] = [
    {
        name: 'Annotation Web Interface',
        url: 'https://nccr-liri.gitbook.io/annotation-web-interface-docs/',
        id: nanoid(),
        category: 4,
    },
    {
        name: 'Catchphrase',
        url: 'https://lcp.linguistik.uzh.ch/manual/catchphrase.html',
        id: nanoid(),
        category: 3,
    },
    {
        name: 'Soundscript',
        url: 'https://lcp.linguistik.uzh.ch/manual/soundscript.html',
        id: nanoid(),
        category: 3,
    },
    {
        name: 'Videoscope',
        url: 'https://lcp.linguistik.uzh.ch/manual/videoscope.html',
        id: nanoid(),
        category: 3,
    },
];
