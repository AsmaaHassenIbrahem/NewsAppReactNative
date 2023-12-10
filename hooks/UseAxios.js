import { useEffect, useState} from 'react';
import axios from 'axios';
import ArticleItem from '../apis/dataResponse';

const UseAxios = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-11-10&sortBy=publishedAt&apiKey=e9a4934c51a940119b91329b8c658223&pageSize=30";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url, {
          'Content-Type': 'application/json'});
        setNewsData(response.data.articles);
      } catch (error) {

        setError(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    newsData,
    loading,
    error
  };
};

export default UseAxios;

