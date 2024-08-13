interface LoadingStateProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectorProps extends LoadingStateProps {}
