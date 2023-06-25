import "./Info.scss"

export const Info = () => {
    return (
        <section className="info-section container">

            <div className="row p-5">
                <div className="col p-5">
                    <div className="line"></div>

                    <h1 className="info-title py-3">Why should you have a cat?</h1>

                    <p className="info-text py-2">
                        Having a cat around you can actually trigger the release of
                        calming chemicals in your body which lower your stress and anxiety leves
                    </p>

                    <button type="button" className="btn btn-link d-flex align-items-end gap-2 p-0 mt-5">
                        <span className="fw-semibold">READ MORE</span>
                        <span className="material-symbols-outlined">trending_flat</span>
                    </button>
                </div>

                <div className="col">
                    asd
                </div>
            </div>
        </section>
    )
}
