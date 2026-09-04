export interface Persona {
  id: string;
  name: string;
  age: number;
  profession: string;
  tagline: string;
  bio: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado' | 'Modo Desafío';
  archetype: string;
  auraBonus: string;
  image: string;
  badges: string[];
  chatSnippet: {
    user: string;
    ai: string;
    auraScore: number;
    tip: string;
  };
  samplePrompts: {
    text: string;
    type: 'alpha' | 'neutral' | 'simp';
    auraImpact: number;
    feedback: string;
    reply: string;
  }[];
}

export interface MatchChatPreview {
  id: string;
  name: string;
  avatar: string;
  time: string;
  lastMessage: string;
  unreadCount?: number;
  online: boolean;
  statusIcon?: 'fire' | 'leaf' | 'star';
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  age: number;
  city: string;
  avatar: string;
  headline: string;
  story: string;
  statBefore: string;
  statAfter: string;
  rating: number;
}

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
  tag: string;
  iconName: string;
}
