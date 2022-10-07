export interface ITask {
  title: string;
  status: Status;
  inner: string;
  checked: boolean;
}

export type Status = 'pending' | 'progress' | 'completed' | 'cancelled';
