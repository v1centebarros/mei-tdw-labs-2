import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {fetchCats} from "../../reducers/slices/catsThunks.js";
import {setLimit, setPage} from "../../reducers/slices/catSlices.js";

export function CatList() {
    const dispatch = useDispatch();
    const limitRef = useRef(null);
    const {data: cats, loading, error, page, limit} = useSelector((state) => state.cats);
    // Fetch cats whenever `page` or `limit` changes
    useEffect(() => {
        dispatch(fetchCats({page, limit}));
    }, [dispatch, page, limit]);

    const handleNextPage = () => {
        dispatch(setPage(page + 1));
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            dispatch(setPage(page - 1));
        }
    };

    const handleLimitChange = () => {
        dispatch(setLimit(limitRef.current.value));
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div style={{marginTop: '20px'}}>
                <button onClick={handlePreviousPage} disabled={page === 1}>
                    Previous
                </button>
                <span style={{margin: '0 10px'}}>Page {page}</span>
                <button onClick={handleNextPage}>Next</button>
                <select ref={limitRef} onChange={handleLimitChange} value={limit}>
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