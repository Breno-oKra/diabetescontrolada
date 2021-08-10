export interface GlicemiMounthProps {
  id: number;
  before: number;
  after: number;
  applied: number;
  goals?: goalsProps[];
  styled: string;
  carboidrats: carboidratsProps[];
}
export interface carboidratsProps {
  id: number;
  item: string;
  details: number;
  consumed: number;
  detailsNamed: string;
  icon: any;
}
export interface goalsProps {
  id: number;
  hour: string;
  title: string;
  goal: number;
}
