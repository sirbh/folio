import { IPublication } from "@/interface/common";

export const publications: IPublication[] = [
  {
    id: "pub-001",
    title:
      "LLM-Generated Microservice Implementations from RESTful APIDeﬁnition",
    authors: [
      "Saurabh Chauhan",
      "Zeeshan Rasheed",
      "Abdul Malik Sami",
      "Zheying Zhang",
      "Jussi Rasku",
      "Kai-Kristian Kemell",
      "Pekka Abrahamsson",
    ],
    description:
      "The growing need for scalable, maintainable, and fast-deploying systems has made microservice architecturewidely popular in software development. This paper presents a system that uses Large Language Models(LLMs) to automate the API-ﬁrst development of RESTful microservices. This system assists in creatingOpenAPI speciﬁcation, generating server code from it, and reﬁning the code through a feedback loop that an-alyzes execution logs and error messages. By focusing on the API-ﬁrst methodology, this system ensures thatmicroservices are designed with well-deﬁned interfaces, promoting consistency and reliability across the de-velopment life-cycle. The integration of log analysis enables the LLM to detect and address issues efﬁciently,reducing the number of iterations required to produce functional and robust services. This process automatesthe generation of microservices and also simpliﬁes the debugging and reﬁnement phases, allowing developersto focus on higher-level design and integration tasks. This system has the potential to beneﬁt software devel-opers, architects, and organizations to speed up software development cycles and reducing manual effort. Toassess the potential of the system, we conducted surveys with six industry practitioners. After surveying prac-titioners, the system demonstrated notable advantages in enhancing development speed, automating repetitivetasks, and simplifying the prototyping process. While experienced developers appreciated its efﬁciency forspeciﬁc tasks, some expressed concerns about its limitations in handling advanced customizations and larger-scale projects. The code is publicly available at https://github.com/sirbh/code-gen.",
    url: "https://www.scitepress.org/publishedPapers/2025/133910/pdf/index.html",
    publicationDate: new Date("2025-01-01"),
    publisher:
      "Proceedings of the 20th International Conference on Evaluation of Novel Approaches to Software Engineering ENASE - Volume 1",
  },
];
