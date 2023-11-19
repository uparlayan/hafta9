function IletisimFormu() {

    const formGonder = (olay) => {
        olay.preventDefault() //olayın varsayılan davranışını devam ettirmesini engelliyoruz
        console.log(olay.currentTarget.adSoyad.value)
    }

    return (
        <form className="iletisim-formu" onSubmit={formGonder}>
            <h2>İletişim Formu</h2>
            <div>
                <label>Ad Soyad</label>
                <input name="adSoyad" type="text" />
            </div>

            <div>
                <label>Mesaj</label>
                <textarea value="Örnek mesaj.." name="mesaj" />
            </div>
            <button type="submit">Gönder</button>
        </form>
    )
}

export default IletisimFormu