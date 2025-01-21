import AboutUs from "../components/AboutUs"
import ListaCheck from "../components/ListaCheck"
import NavbarMaterial from "../components/NavbarMaterial"
import ScrollToTopButton from "../components/ScrollToUp"

export const Request = () => {
  return (
    <div>
        <NavbarMaterial/>
        <div className="overflow-x-scroll min-w-full">

        <ListaCheck/>
        </div>

        <ScrollToTopButton/>
        <AboutUs id='about-section'/>

    </div>
  )
}
