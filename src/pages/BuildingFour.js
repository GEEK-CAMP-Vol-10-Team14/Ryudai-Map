// src/routes/BuildingFour.js
import './pages.css';
export const BuildingFour = () =>{
    return (
        <div className='main'>
            <a href=".." >&lt;マップに戻る</a>
            <h1>工学部 4号館</h1>
            <table border="1">
                <tr>
                    <th>緯度経度</th>
                    <th>緯度26度15分08秒981 経度127度46分02秒965</th>
                </tr>
                <tr>
                    <th>Plus Code</th>
                    <th>7QR97Q29+X2</th>
                </tr>
                <tr>
                    <th>what3words</th>
                    <th>///つなげる。えきたい。まいねん</th>
                </tr>
            </table>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1722141449661!6m8!1m7!1sJnGMAYwzjIPvjw09RU7IqA!2m2!1d26.25248109444628!2d127.7670184350192!3f111.83068832813339!4f10.058078269488846!5f0.7820865974627469"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Building_looks">
            </iframe>
            <h2>主な施設</h2>
            <h3>一階</h3>
            <p></p>

            <h2>アクセス</h2>
            <p>
                北口から：徒歩約7分<br></br>
                北食堂から：徒歩約3分
            </p>

            <h2>備考</h2>
            <p>
                謎の建物
            </p>
        </div>
    )
}
