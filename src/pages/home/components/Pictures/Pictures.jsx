import "./Pictures.scss";

export const Pictures = () => {
    return (
        <div className="row pictures">
            <div className="col-6 d-flex flex-column align-items-end gap-4">
                <img className="picture picture-1" src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg" alt="cat" />
                <img className="picture picture-2" src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg" alt="cat" />
            </div>

            <div className="col-6">
                <img className="picture picture-3" src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg" alt="cat" />
            </div>
        </div>
    )
}
