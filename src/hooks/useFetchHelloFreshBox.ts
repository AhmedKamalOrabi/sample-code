import { IBox } from 'interfaces';
import { useState, useEffect } from 'react';
import hellofreshBox from '../data/hellofreshBox';

const useFetchHelloFreshBox = (): { data: IBox; loading: boolean } => {
  const [data, setData] = useState<IBox | Record<string, never>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(hellofreshBox as IBox);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data: data as IBox, loading };
};

export default useFetchHelloFreshBox;
