import {BrowserRouter,  Routes, Route, Link} from "react-router-dom";
import './estilo.css'
import Pagina2 from "./pag/Pagina2";


function Pagina1(props){
    return(
        <div>
            <div className="collapse bg-[#FA6775] border border-base-300">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title font-semibold text-center">Danzas de Bolivia</div>
            </div>
            <div className="collapse bg-red-600 border border-base-300" >
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">Morenada</div>
              <div className="collapse-content text-sm">La Morenada es una danza boliviana, parte fundamental de la cultura andina, con orígenes que se remontan a la época colonial española, especialmente en las minas de Potosí, Oruro y Popoo.</div>
              </div>
            <div className="collapse bg-red-600 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">Diablada</div>
              <div className="collapse-content text-sm">La diablada es una danza y festividad religiosa de origen boliviano, específicamente de la ciudad de Oruro, que se celebra durante el Carnaval de Oruro. Su origen se remonta al siglo XVII o XVIII, cuando los mineros españoles rendían homenaje a la Virgen de Candelaria o Virgen del Socavón, la cual se consideraba su protectora. </div>
            </div>
            <div className="collapse bg-amber-300 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">Caporales </div>
              <div className="collapse-content text-sm">La danza de Caporales es una expresión artística boliviana que surgió en la década de 1960 en La Paz, inspirada en el personaje del caporal (capataz) de los esclavos negros y mestizos. Fue creada por los hermanos Estrada Pacheco, quienes fusionaron elementos de la saya y otras tradiciones culturales.</div>
            </div>
            <div className="collapse bg-green-700 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">Kullaguada</div>
              <div className="collapse-content text-sm">La danza Kullawada, también conocida como Kullaguada, es una danza folklórica boliviana con raíces en el altiplano andino. Se caracteriza por su origen prehispánico y su vínculo con los hilanderos y tejedores de lana de llama, especialmente en el área alrededor de La Paz.</div>
            </div>
            <div className="collapse bg-green-700 border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title font-semibold">Saya Afroboliviana</div>
              <div className="collapse-content text-sm">La saya afroboliviana es una expresión cultural afrodescendiente en Bolivia, caracterizada por su música, danza y vestimenta, que refleja la historia y resistencia del pueblo afroboliviano. Su historia se remonta a las comunidades afrobolivianas, descendientes de esclavos traídos a las minas de Potosí en el siglo XVI, y ha evolucionado a través de la historia y la influencia de otras culturas andinas.</div>
            </div>
        </div>
        

    );   

}

function Principal(props){
    return(
        <div>
            <div className="padre">
                <div className="bar ">
                  <h1>Danny Kevin Copana Quispe</h1>
                  </div>
                <div className="menu">
                <div className="navbar bg-emerald-600 shadow-sm">
                        <div className="flex-1">
                            <a className="btn btn-ghost text-xl"><h2>Menú</h2></a>
                        </div>
                        <div className="flex-none"> 
                            <ul className="menu menu-horizontal px-1">
                              <li><Link to='/'>Inicio</Link></li>
                              <li><Link to='/pag2'>Ofertas de curso</Link></li>
                                     
                            </ul>
                        </div>              
                </div>
                </div>
                <div className="c1">
                    <Routes>
                        <Route path='/' element={<Pagina1/>}/>
                        <Route path='/pag2' element={<Pagina2/>}/>
                        
                    </Routes>
                  

                </div>             
                <div className="foot">
                    
                    <p>contactanos: dannycopanaquispe@gmail.com</p>
                </div>
            </div>
            
        </div>
    );
}
export default Principal;