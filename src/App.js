import Haber from "./Haber";
import haberler from "./data.js"
import IletisimFormu from "./IletisimFormu.jsx";
import { useState } from "react";

function App() {
  const [stateSayi, stateSayiGuncelle] = useState(1)  // bu değişkeni takip etmek içinbu fonksiyonu kullan anlamına geliyor.
  let sayi = 1

  function darkMode() {
    document.body.classList.add("dark-mode")
  }

  function rangeDegistir(olay) {
    console.log(olay.currentTarget.value)
  }

  const test1 = ()=>{
    console.log( `sayi = ${sayi}` )
    console.log( `stateSayi = ${stateSayi}` )
    sayi++
    //stateSayiGuncelle( stateSayi + 1 ) // önerilmez ama işe yarar...
    stateSayiGuncelle( onceliDeger => onceliDeger + 1 ) // tavsiye edilen yöntem (callback fn kullanımı...)
  }

  return (
    <>
      <header className="container flex-kutu">
        <h1>APP 1 [{sayi}] [{stateSayi}]</h1>  <input min="-100" max="100" type="range" onInput={rangeDegistir} />

        <div>
          <button onClick={() => { darkMode() }}>DarkMode</button>
          <button onClick={test1}>Değişken Testi</button>
        </div>
      </header>

      <section className="haber-bolge container">
        <h2>HABERLER</h2>
        <div className="haber-liste">
          {haberler.length === 0 && <p>Hiç haber verisi gelmedi.</p>}

          {haberler.map((haber) =>
            <Haber key={haber.id} baslik={haber.apiBaslik} gorselUrl={haber.apiGorselUrl} ozet={haber.apiOzet} />
          )}
        </div>
      </section>

      <section className="container">
        <IletisimFormu />
      </section>

      <footer className="flex-kutu container">
        <p>Tüm hakları saklıdır.</p>
        <p>Tasarım ve Kodlama: Uğur Parlayan</p>
      </footer>
    </>
  );
}

export default App;
