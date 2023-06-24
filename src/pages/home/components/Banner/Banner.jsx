import { Logo } from "../../../../components/Logo"
import './Banner.scss'

export const Banner = () => {
  return (
    <section className="banner container-fluid px-5" >
      <div className="content p-5">

        <section className="info px-5">
           <Logo color="white" />
        </section>

      </div>
    </section>
  )
}