// src/routes/BuildingThree.js
import './pages.css';
export const BuildingThree = () =>{
    return (
        <div className='main'>
            <a href=".." >&lt;マップに戻る</a>
            <h1>工学部 3号館</h1>
            <table border="1">
                <tr>
                    <th>緯度経度</th>
                    <th>緯度26度15分07秒651 経度127度46分00秒418</th>
                </tr>
                <tr>
                    <th>Plus Code</th>
                    <th>7Q28+RP 西原町、沖縄県</th>
                </tr>
                <tr>
                    <th>what3words</th>
                    <th>///ごがく。ほねつき。めんせき</th>
                </tr>
            </table>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1722138839783!6m8!1m7!1sDGQtu0rcsYZj3JNELOBYGA!2m2!1d26.25184247507107!2d127.7666553411464!3f26.730926526682932!4f14.756179840839707!5f0.7820865974627469"
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
                北食堂から：徒歩約2分
            </p>

            <h2>備考</h2>
            <p>
                謎の建物
            </p>
        </div>
    )
}
