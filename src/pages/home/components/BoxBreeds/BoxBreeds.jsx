import { CatCard } from '../../../../components/CatCard/CatCard';
import './BoxBreads.scss';

export const BoxBreeds = () => {
    const breeds = [1, 2, 3, 4];

    return (
        <section className="box-breads-component container-fluid px-5" >
            <div className="content p-5">

                <div className="row">
                    <div className="col title">
                        <h6>Most Searched Breeds</h6>
                        <div className="line"></div>
                    </div>
                </div>

                <div className="row align-items-end">
                    <div className="col py-5">
                        <h1 className="text-start title ">66+ Breeds For you to discover</h1>
                    </div>

                    <div className="col py-5 d-flex justify-content-end" >
                        <button type="button" className="btn btn-link d-flex align-items-end gap-2">
                            <span>SEE MORE</span>
                            <span className="material-symbols-outlined">trending_flat</span>
                        </button>
                    </div>
                </div>

                <div className="row">
                    <div className="col d-flex gap-5">
                        {
                            breeds.map((breed, index) => <CatCard key={index} breed={breed} />)
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}
