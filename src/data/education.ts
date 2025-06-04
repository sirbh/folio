import { IEducation } from "@/interface/common";

export const education: IEducation[] = [
    {
        id: "edu-001",
        institution: "Guru Gobind Singh Indraprastha University, India",
        degree: "Bachelor of Technology",
        fieldOfStudy: "Electronics and Communication Engineering",
    },
    {
        id: "edu-002",
        institution: "Tampere University, Finland",
        degree: "Master of Science",
        fieldOfStudy: "Software, Web and Cloud",
        startDate: new Date("2022-08-01"),
        endDate: new Date("2025-01-10"),
        description:
        "Specialized in distributed systems and cloud computing. Conducted research on microservices architecture and its impact on software scalability.",
    },
]