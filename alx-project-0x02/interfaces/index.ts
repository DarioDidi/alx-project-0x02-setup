export interface CardProps {
  title: string;
  content: string;
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostProps) => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
};
