import "./CatCard.scss";

export const CatCard = () => {
    return (
        <div className="card cat">
            <img src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg" alt="cat" />

            <div className="card-body">
                <h5 className="card-title">Norwich Terrier</h5>
            </div>
        </div>
    )
}
