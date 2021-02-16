export interface ChartEntry {
  x: string;
  y1: number;
  y2: number;
  y3: number;
  y4: number;
  y5: number;
}

export interface Chart {
  entries: ChartEntry[];
}
