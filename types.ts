
export interface Hero {
    id: string;
    name: string;
    role: 'Tank' | 'Fighter' | 'Assassin' | 'Mage' | 'Marksman' | 'Support';
    image: string;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    category: string;
    image: string;
    readTime?: string;
    content?: string;
    author?: string;
}

export interface HeroStat {
    id: string;
    name: string;
    rank: 'S' | 'A' | 'B' | 'C' | 'D';
    winRate: number;
    pickRate: number;
    banRate: number;
    image: string;
}

export type NavItem = {
    label: string;
    path: string;
    icon?: string;
};
