import { useCallback, useEffect, useState } from "react";

/**
 * 실행 로그를 보여주기 위한 hook
 * show: 정답 보여주기 함수
 * isLogShow: 정답을 보여 주나?
 * result: view에 나타날 실행 결과
 */
const useLog = <T extends number | string>() => {
  const [queue, setQueue] = useState<T[]>([]);
  const [result, setResult] = useState<T[]>([]);
  const [isLogShow, setIsFired] = useState(false);

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
    if (isLogShow) {
      const moveTimer = setInterval(move, 1000);
      return () => clearTimeout(moveTimer);
    }
  }, [move, isLogShow]);

  useEffect(() => {
    console.log = (a) => pushToQueue(a);
  }, [pushToQueue]);

  return {
    show: () => setIsFired(true),
    isLogShow,
    result,
  };
};

export default useLog;
