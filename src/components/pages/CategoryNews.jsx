import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [CategoryNews, setCategoryNews] = useState([]);
    
    useEffect(() =>{
        if (id == "0"){
            setCategoryNews(data);
        } else if (id == "1"){
            const filteredNews = data.filter(news=>news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
       
        } else {
             const filteredNews = data.filter((news)=>news.category_id == id);
     setCategoryNews(filteredNews);
        }
    
    },[data, id]);
    return (
        <div>
           <h2 className="font-bold"> <span className="text-secondary">Total {CategoryNews.length} </span>NewsFound </h2>
        </div>
    );
};

export default CategoryNews;

