interface LoadingProps {
  loading: boolean;
}

export default function Loading({ loading }: LoadingProps) {
  return (
    <div className={`loading-container ${!loading ? "invisible" : ""}`}>
      <div className="loading-line"></div>
    </div>
  );
}
