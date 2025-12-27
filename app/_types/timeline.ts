import { Bond } from './bond';

export interface TimelineMarking {
  id: string;
  positionTop: string;
  cardsPositionTop?: string;
  eventDate: string;
  eventAmount: string;
  bonds: Bond[];
}

export interface TimelineEvent {
  positionTop: string;
  eventDate: string;
  eventAmount: string;
  bonds: Bond[];
  align?: 'left' | 'right';
}