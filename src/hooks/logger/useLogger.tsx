import { useCallback, useEffect, useState } from "react";

const useLogger = <T extends number | string>() => {
  const [queue, setQueue] = useState<T[]>([]);
  const [result, setResult] = useState<T[]>([]);
  const [isShow, setIsFired] = useState(false);

  const show = () => setIsFired(true);

  const pushToQueue = useCallback(
    (item: T) => {
      setQueue((prev) => [...prev, item]);
    },
    [setQueue]
  );

  const move = useCallback(() => {
    if (queue.length !== 0) {
      setResult((prev) => [...prev, queue[0]]);
      setQueue((prev) => prev.slice(1));
    }
  }, [queue]);

  useEffect(() => {
    if (isShow) {
      const moveTimer = setInterval(move, 1000);
      return () => clearTimeout(moveTimer);
    }
  }, [move, isShow]);

  return { log: pushToQueue, isShow, show, result };
};

export default useLogger;
