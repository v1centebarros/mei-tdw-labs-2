import {useState} from 'react';
import {useFetchCatsQuery} from "../../api/apiSlice.js";

const CatList = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const {data: cats, error, isLoading} = useFetchCatsQuery({page, limit});

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    const handleLimitChange = (e) => {
        setLimit(e.target.value);
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <div style={{marginTop: '20px'}}>
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Previous
                </button>
                <span style={{margin: '0 10px'}}>Page {page}</span>
                <button onClick={handleNextPage}>Next</button>
                <select onChange={handleLimitChange} value={limit}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
            <ul>
                {cats.map((cat) => (
                    <li key={cat.id}>
                        <h3>{cat.name}</h3>
                        <p>{cat.description}</p>
                        <img src={cat.image?.url} alt={cat.name} style={{width: '200px'}}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CatList;