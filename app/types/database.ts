// types/database.ts

export interface ClassRule {
    id: string;
    name: string;
    score: number;
    icon?: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    icon?: string;
    description?: string;
}

export interface GrowthThresholds {
    lv1: number;
    lv2: number;
    lv3: number;
    lv4: number;
    lv5: number;
}

export interface Class {
    _id?: string;
    name: string;
    teacherId: string;
    petStyle: 'cute' | 'pixel' | 'realistic' | 'plush';
    adoptionType: 'manual' | 'random';
    rules: ClassRule[];
    products: Product[];
    thresholds: GrowthThresholds;
    createdAt: number;
}

export interface Student {
    _id?: string;
    classId: string;
    name: string;
    xp: number;          // Growth points for feeding (Reset on Lv5)
    totalXp: number;     // Cumulative for leaderboard
    petId?: string;      // Current pet ID
    level: number;       // 1-5
    badges: number;      // Earned at each Lv5 completion
    collectedPets: string[]; // List of pet IDs already leveled to max
}

export interface ScoringRecord {
    _id?: string;
    studentId: string;
    classId: string;
    ruleName: string;
    score: number;
    timestamp: number;
}
