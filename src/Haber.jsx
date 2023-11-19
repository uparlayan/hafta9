function Haber({baslik, ozet, gorselUrl}) {

  return (
      <div className="haber-tek">
          <img src={gorselUrl} />
          <h3>{baslik ? baslik : "Başlıksız2"}</h3>
          <p>{ozet ? ozet : "Haberin hazırlık süreci devam ediyor."}</p>
          <a href="#">Haberi Oku</a>
      </div>
  )
}

export default Haber