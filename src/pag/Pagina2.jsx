function Pagina2(props){
    return(
        <div className="lapaz flex flex-row justify-center gap-4 bg-[#AEB38]">
            <div className="card bg-[#FA6775] w-96 shadow-sm">
  <figure>
    <img
      src="public\img1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Morenada</h2>
    <p>la máscara, el traje completo, incluyendo sombrero, manta y botas, los apliques del traje, y el peinado y maquillaje </p>
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Precio</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Costo estimado:</h3>
    <p className="py-4">4,000 bolivianos</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  </div>
</div>
<div className="card bg-[#FA6775] w-96 shadow-sm">
  <figure>
    <img src="public\img2.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Caporales</h2>
    <p>Los trajes de caporal pueden ser bastante costosos, especialmente los trajes elaborados con materiales de alta calidad o los trajes personalizados.</p>
    <div className="card-actions justify-end">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Precio</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Costo estimado:</h3>
    <p className="py-4">525.00 Bolivianos</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

    </div>
  </div>
</div>
<div className="card bg-[#FA6775] w-96 shadow-sm">
  <figure>
    <img
      src="public\img3.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">kullawada</h2>
    <p>Bailar kullawada en Bolivia, como cualquier danza folklórica, no tiene un costo directo como un boleto de entrada.</p>
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Precio</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Costo estimado:</h3>
    <p className="py-4">200.00 boliviano</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
}
export default Pagina2;