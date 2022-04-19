const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '229e8614f7msh4e5939512c43cecp145276jsn0d25cb6ca194'
    }
};
export const fetchData = async (url) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
};