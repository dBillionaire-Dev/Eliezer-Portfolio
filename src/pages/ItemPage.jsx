import { useParams } from 'react-router-dom';
import data from '../data.json';

function ItemPage() {
    const { slug } = useParams();
    const item = data.find(entry => entry.slug === slug);

    if (!item) return <div className="p-5 text-center">Item Not Found</div>;

    return (
        <div className="p-5 text-center">
            <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
            <img src={item.image} alt={item.title} className="mx-auto rounded mb-4" />
            <p className="text-gray-600">{item.description}</p>
        </div>
    );
}

export default ItemPage;
