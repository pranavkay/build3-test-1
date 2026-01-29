import React from 'react';
import { NavItem, PortfolioItem, FeatureCard, Testimonial } from './types';
import { SketchyLightbulb, SketchyBeaker, SketchyRocket, SketchyCoins, SketchyUsers, SketchyGlobe } from './components/Icons';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Impact Tech', href: '#impact-tech' },
  { label: 'Startup Studio', href: '#studio' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Community', href: '#community' },
];

export const VERTICALS = [
  { 
    id: 'studio',
    title: 'Startup Studio', 
    icon: <SketchyLightbulb />, 
    href: '#services',
    description: 'We co-build impact-driven startups from scratch. We provide the early-stage infrastructure, product engine, and capital to go from zero to one.',
    features: ['Dedicated Co-founder support', 'Initial Pre-seed Capital', 'Product & Design Team']
  },
  { 
    id: 'vc',
    title: 'Venture Capital', 
    icon: <SketchyCoins />, 
    href: '#services',
    description: 'Direct investment for mission-driven startups. We back founders who are using technology to solve systemic environmental and social problems.',
    features: ['Check sizes from $100k - $500k', 'Strategic Follow-on rounds', 'Network of LPs and VCs']
  },
  { 
    id: 'tribe',
    id_alias: 'community',
    title: 'Builder Tribe', 
    icon: <SketchyUsers />, 
    href: '#services',
    description: 'A thriving community of 5,000+ changemakers, experts, and operators. We believe in building together rather than building alone.',
    features: ['Weekly Expert Sessions', 'Curated Peer Groups', 'Annual Tribe Retreats']
  },
  { 
    id: 'program',
    title: 'Founders Program', 
    icon: <SketchyBeaker />, 
    href: '#services',
    description: 'A structured 12-week cohort-based program designed to help solo-founders find co-founders and validate their impact-tech ideas.',
    features: ['Co-founder Matching', 'Market Validation Framework', 'Demo Day to VCs']
  },
  { 
    id: 'tech',
    title: 'Impact Tech', 
    icon: <SketchyRocket />, 
    href: '#services',
    description: 'Our core focus area. We specialize in deep-tech applications across Climate, Agri, Health, and Education sectors.',
    features: ['IP Commercialization', 'Sector-specific Mentorship', 'Global Impact Metrics']
  },
  { 
    id: 'esg',
    title: 'ESG Advisory', 
    icon: <SketchyGlobe />, 
    href: '#services',
    description: 'Helping modern startups bake sustainability into their DNA. We guide companies on carbon accounting, diversity, and governance.',
    features: ['Impact Audits', 'ESG Framework Implementation', 'Sustainability Reporting']
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { 
    name: 'Kora', 
    logo: 'https://picsum.photos/seed/kora/200/200', 
    category: 'Fintech', 
    description: 'Empowering individual climate action.' 
  },
  { 
    name: 'GreenDot', 
    logo: 'https://picsum.photos/seed/green/200/200', 
    category: 'Circularity', 
    description: 'Waste management and recycling solutions.' 
  },
  { 
    name: 'Paws', 
    logo: 'https://picsum.photos/seed/paws/200/200', 
    category: 'Consumer', 
    description: 'Sustainable pet care products.' 
  },
  { 
    name: 'Veda', 
    logo: 'https://picsum.photos/seed/veda/200/200', 
    category: 'EdTech', 
    description: 'Ancient wisdom for modern lives.' 
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Build3 isn't just an investor; they are true partners in the trenches. Their studio model helped us navigate the messy early days of product validation.",
    author: "Arjun Mehta",
    role: "CEO & Founder",
    company: "EcoTrace",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "The community at Build3 is unmatched. Being surrounded by other impact-focused founders provided the support system I didn't know I needed.",
    author: "Sarah Jenkins",
    role: "Co-Founder",
    company: "SolarGrid",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
  },
  {
    quote: "Their ESG advisory helped us integrate impact into our business model from day one. It's rare to find a team that understands both tech and sustainability so deeply.",
    author: "David Chen",
    role: "Founder",
    company: "PureWater Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80"
  }
];

export const STUDIO_PHASES: (FeatureCard & { component: React.ReactNode })[] = [
  {
    title: 'Ideation',
    description: 'We identify systemic problems and brainstorm innovative, impact-driven solutions.',
    icon: '💡',
    component: <SketchyLightbulb />,
    color: '#FFFAB7'
  },
  {
    title: 'Validation',
    description: 'We test prototypes and business models to ensure market-fit and impact potential.',
    icon: '🧪',
    component: <SketchyBeaker />,
    color: '#FFFAB7'
  },
  {
    title: 'Scaling',
    description: 'Once validated, we provide the resources and network to grow the startup rapidly.',
    icon: '🚀',
    component: <SketchyRocket />,
    color: '#FFFAB7'
  }
];