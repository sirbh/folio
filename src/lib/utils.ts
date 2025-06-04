import { Issuer } from "@/interface/common";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIssuerLogo(issueBy:Issuer) {
  switch (issueBy) {
    case Issuer.Udemy:
      return "/images/udemy_logo.jpg";
    case Issuer.Coursera:
      return "/images/coursera_logo.jpg";
    case Issuer.Langchain:
      return "/images/langchain_logo.jpg";
    case Issuer.TheJuliaProgramming:
      return "/images/the_julia_language_logo.jpg";
    default:
      return "/images/default.png";
  }
}
