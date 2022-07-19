import { useEffect, useState } from "react";
import axios from 'axios';
import { useQuery } from 'react-query';
//https://api.unsplash.com/search/photos?query=&client_id=TxpNZY16IiQWlOO0mJf9o5ZjggBaJRGs_920WBwrGyY

//TxpNZY16IiQWlOO0mJf9o5ZjggBaJRGs_920WBwrGyY  ACCES KEY

const SearchImages = (query) => {
    const [img1, setImg1] = useState([]);
    useEffect(() => {
        const api = `https://api.unsplash.com/search/photos?query=${query}&client_id=TxpNZY16IiQWlOO0mJf9o5ZjggBaJRGs_920WBwrGyY`;
        axios
        .get(api)
        .then((data) => {
        setImg1(data.data.results);
        })
    }, [query]);
    return img1
}

export { SearchImages };