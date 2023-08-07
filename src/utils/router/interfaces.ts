import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export interface IRoute {
  // Lazy Loaded component
  component?: LazyExoticComponent<ComponentType<unknown>> | ComponentType<unknown>;
  // Exact, like in basic prop
  exact: boolean;
  // Preloader for lazy loading
  fallback: NonNullable<ReactNode> | null;
  // If router is private, this is going to be true
  isPrivate?: boolean;
  // Path, like in basic prop
  path: string;
  // Redirect path
  redirect?: string;
}
