import { Tag } from '@/types';
import {
  Landmark,
  Sparkles,
  Heart,
  Moon,
  TreePine,
  Waves,
  LucideIcon,
} from 'lucide-react';

export const TAGS: Record<Tag, { label: Tag; icon: LucideIcon; description: string }> = {
  Shrines: {
    label: 'Shrines',
    icon: Landmark,
    description: 'Sacred temples and sanctuaries',
  },
  'Fortune Telling': {
    label: 'Fortune Telling',
    icon: Sparkles,
    description: 'Divination practices',
  },
  'Power Spots': {
    label: 'Power Spots',
    icon: Heart,
    description: 'Spiritual energy locations',
  },
  Omamori: {
    label: 'Omamori',
    icon: Heart,
    description: 'Protective amulets',
  },
  Onmyoji: {
    label: 'Onmyoji',
    icon: Moon,
    description: 'Ancient mysticism',
  },
  'Zen & Temples': {
    label: 'Zen & Temples',
    icon: TreePine,
    description: 'Zen meditation spaces',
  },
  Rituals: {
    label: 'Rituals',
    icon: Waves,
    description: 'Traditional ceremonies',
  },
};

export const TAG_LIST: Tag[] = [
  'Shrines',
  'Fortune Telling',
  'Power Spots',
  'Omamori',
  'Onmyoji',
  'Zen & Temples',
  'Rituals',
];
