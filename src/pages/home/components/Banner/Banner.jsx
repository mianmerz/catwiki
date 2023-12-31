 import { Logo, Search } from "../../../../components";
import './Banner.scss';

export const Banner = () => {
  return (
    <section className="banner-section container-fluid px-5" >
      <div className="content p-5">

        <section className="info px-5">
          <Logo color="white" width={315} height={104} />

          <h5 className="subtitle">Get to know more about your cat breed</h5>

          <Search />
        </section>

      </div>
    </section>
  )
}