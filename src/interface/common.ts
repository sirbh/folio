export interface ILicense {
    id: string;
    name: string;
    description: string;
    url?: string;
    issueDate?: Date;
    issuedBy: Issuer;
}

export interface IPublication {
    id: string;
    title: string;
    description: string;
    url: string;
    publicationDate: Date;
    authors: string[];
    publisher: string;
}

export interface IEducation {
    id: string;
    institution: string;
    degree: string;
    fieldOfStudy: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
}

export interface ITechnology {
    id: string;
    name: string;
    category: string;
    imageUrl: string;
}

export enum Issuer {
  Udemy = "Udemy",
  Coursera = "Coursera",
  Langchain = "Langchain",
  TheJuliaProgramming = "TheJuliaProgramming"
}

export interface IProjects {
    id: string;
    name: string;
    description: string;
    url: string;
    youTubeUrl?: string;
}

