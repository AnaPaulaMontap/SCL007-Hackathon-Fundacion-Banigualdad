import React, {Component} from 'react';
import './Noticias.css'
import NavbarPag from '../Navbar/navbar-emp'


class Noticias extends Component {
  render() {
    return (
      <div>
      <NavbarPag/>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <br></br>
          <h5 className="loto">Conoce otros Emprendendores</h5>
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

            <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/11/solange-cspedes.jpg" alt="First slide"/>
                  <div className="carousel-caption">
                    <h5>SOLANGE CÉSPEDES: MANTENIENDO LA TRADICIÓN EN POMAIRE</h5>
                  </div>
                  </div>
                  
                  <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/06/alice-peailillo.jpg" alt="Second slide"/>
                  <div className="carousel-caption">
                    <h5>LAS TERAPIAS DE ALICE</h5>
                  </div>
                  </div>
                  
                  <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/09/maria-rodriguez-curico-2.jpg" alt="Third slide"/>
                  <div className="carousel-caption">
                    <h5>BANIGUALDAD EN GLOBAL GIVING</h5>
                  </div>
                  </div>

                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
              
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                  </a>
          </div>
            <br></br>

            <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
            <br></br>
            <h5 className="loto">Temas mas comentados</h5>
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
            </ol>

          <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/04/marisol-castaeda-y-anbal-vial.jpg" alt="First slide"/>
                <div className="carousel-caption">
                  <h5>CUMPLE TU SUEÑO”: VAMOS POR MÁS</h5>
                </div>
                </div>
                
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/01/luz-gacita.jpg" alt="Second slide"/>
                <div className="carousel-caption">
                  <h5>EMPRENDER PARA NO DESCUIDAR LOS HIJOS NI LA CASA Y TRABAJAR IGUAL.</h5>
                 
                </div>
                </div>
                
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/03/marianela-crdova.jpg" alt="Third slide"/>
                <div className="carousel-caption">
                  <h5>DATO MARZO: UNIFORMES ESCOLARES</h5>
                </div>
                </div>

                <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
            
                <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
              
            </div>
                <br></br>

              <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                  <br></br>
                  <h5 className="loto">Ultimas Noticias de BanIgualdad</h5>
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                  </ol>

                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/04/despega-ok.jpg" alt="First slide"/>
                      <div class="carousel-caption">
                        <h5>“DESPEGA 2018”: NUEVOS EVENTOS PARA NUESTROS EMPRENDEDORES</h5>
                        
                      </div>
                      </div>
                      
                      <div className="carousel-item">
                        <img className="d-block w-100 img-fluid" src="https://www.banigualdad.cl/wp-content/uploads/2018/04/visita-radio-adn-1.jpg" alt="Second slide"/>
                      <div className="carousel-caption">
                        <h5>BANIGUALDAD EN RADIO ADN</h5>
                     
                      </div>
                      </div>
                      
                      <div className="carousel-item">
                        <img className="d-block w-100" src="https://www.banigualdad.cl/wp-content/uploads/2018/06/supervisores-bi.jpg"  alt="Third slide"/>
                      <div className="carousel-caption">
                        <h5>SUPERVISORES DE BANIGUALDAD REALIZAN SU ENCUENTRO ANUAL EN SANTIAGO</h5>
                       
                      </div>
                      </div>

                      <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                  
                      <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="sr-only">Next</span>
                      </a>
                    <br></br>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      );
    }
}


export default Noticias;