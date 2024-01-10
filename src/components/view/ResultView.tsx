const ResultView = ({ result }: { result: number[] }) => {
  if (result.length === 0) return "정답을 확인합니다";

  return (
    <div className="flex flex-col gap-0.5 min-h-0 bg-slate-600 border-slate-600 border-2 flex-1">
      {result.map((item, i) => (
        <div className="bg-slate-100 p-1" key={i}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ResultView;
