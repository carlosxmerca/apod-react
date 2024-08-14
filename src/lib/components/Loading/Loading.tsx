interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  if (loading)
    return (
      <div className="h-[4px] w-full fixed top-0 left-0 z-[100]">
        <div className="loading-container">
          <div className="loading-line"></div>
        </div>
      </div>
    );
}
