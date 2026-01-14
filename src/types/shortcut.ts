export type StoryType = 'feature' | 'bug' | 'chore';

export interface Story {
  id: number;
  name: string;
  description: string;
  story_type: StoryType;
  workflow_state_id: number;
  estimate?: number;
  app_url: string;
  labels: Array<{
    id: number;
    name: string;
    color: string;
  }>;
}